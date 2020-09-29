import React, {useState, useEffect, useCallback, Suspense, lazy} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Sidenav from "./Sidenav";
import ConfirmExit from "./ConfirmExit";
import UserProfile from "./UserProfile";
import HomeView from "../../containers/MainApp_HomeView";
import ScheduleView from "../../containers/MainApp_ScheduleView";
import PageLoader from "./PageLoader";
import {Wrapper, Header, Main, AppLoader, Status, Spinner} from "./styles";

import GoogleCalendar from "../../helpers/GoogleCalendar";

import FirebaseContext from "../../FirebaseContext";

const Settings = lazy(()=>import("./Settings"));
const Admin = lazy(()=>import("./../../containers/MainApp_AdminView"));

export default function MainApp(props){
  const [currentUser] = useCurrentUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [logOutDialog, userIsLoggedOut, openLogOutDialog, closeLogOutDialog, logOut] = useAppLogOut();
  
  const firebaseContext = React.useContext(FirebaseContext);
  
  // eslint-disable-next-line
  const loadCalendar = useCallback(()=>{
    if(currentUser.isAdmin){
      return GoogleCalendar.load()
    }else{
      return Promise.resolve()
    }
  }, [currentUser]);
  
  // eslint-disable-next-line
  async function loadApplicationData(){
    try{  
      let [classes, subjects, teachers, schedules] = await Promise.all([
        firebaseContext.getAllSchoolClasses(),
        firebaseContext.getAllSubjects(),
        firebaseContext.getAllTeachers(),
        firebaseContext.getAllSchedules(),
        loadCalendar()
      ]);
      
      props.setClassesList(classes);
      props.setSubjectsList(subjects);
      props.setTeachersList(teachers);
      props.setScheduleLists(schedules);
      
    }catch(error){
      console.log(error);
      setError(new Error("Error occured while loading application"));
    }
    setLoading(false);
  // eslint-disable-next-line  
  }
  
  useEffect(()=>{
    loadApplicationData();
  }, [loadApplicationData]);
  
  function useCurrentUser(){
    const [user] = useState(props.currentUser);
    
    const currentUserSet = Boolean(user);
    const isAdmin = Boolean(user && user.email === "admin@timetableplanner.edu");
    
    return [{...user, isSet:currentUserSet, isAdmin}];
  }
  
  function useAppLogOut(){
    const [exit, setExit] = useState({dialog:false, confirmed:false});
    
    const openDialog = ()=>setExit({dialog:true, confirmed:false});
    const closeDialog = ()=>setExit({dialog:false, confirmed:false});
    const logOut = ()=>setExit({dialog:false, confirmed:true});
    const isLoggedOut = exit.confirmed;
    
    return [exit.dialog, isLoggedOut, openDialog, closeDialog, logOut];
  }
  
  if(userIsLoggedOut || !currentUser.isSet){
    return (<Redirect to="/"/>);
  }
  
  if(!!error){
    throw error;
  }
  
  return (<Wrapper>
    <Header className="level-100">
     <div></div>
     <div><UserProfile user={currentUser}/></div>
    </Header>
    <Main>
      <Router basename="/app">
        <Sidenav openLogOutDialog={openLogOutDialog} user={currentUser}/>
        <ConfirmExit visible={logOutDialog} closeLogOutDialog={closeLogOutDialog} logOut={logOut}/>
        <Switch>
          <Route path="/home" exact>
            <HomeView 
              selectedDate={props.selectedDate} 
              selectDate={props.selectDate} 
              user={currentUser}
            />
          </Route>
          <Route path="/schedule" exact>
            <ScheduleView/>
          </Route>
          <Route path="/settings" exact>
            <Suspense fallback={<PageLoader/>}>
              <Settings user={currentUser}/>
            </Suspense>
          </Route>
          <Route path="/admin" exact>
            <Suspense fallback={<PageLoader/>}>
              <Admin/>
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </Main>
    {loading && 
      <AppLoader>
        <Status>
          <div className="spinner"><Spinner/></div>
          <div className="label">Please Wait...</div>
        </Status>
      </AppLoader>
   }
  </Wrapper>)
}

MainApp.propTypes = {
  selectedDate:PropTypes.string.isRequired,
  selectDate:PropTypes.func.isRequired,
  currentUser:PropTypes.object,
  setClassesList:PropTypes.func.isRequired,
  setSubjectsList:PropTypes.func.isRequired,
  setTeachersList:PropTypes.func.isRequired,
  setScheduleLists:PropTypes.func.isRequired
}