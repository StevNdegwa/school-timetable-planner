import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Sidenav from "./Sidenav";
import ConfirmExit from "./ConfirmExit";
import UserProfile from "./UserProfile";
import Home from "./Home";
import Settings from "./Settings";
import AdminView from "../../containers/MainApp_AdminView";
import Schedule from "./Schedule";
import {Wrapper, Header, Main, AppLoader, Spinner} from "./styles";

import FirebaseContext from "../../FirebaseContext";

export default function MainApp(props){
  const [loading, setLoading] = useState(true);
  const [confirmExit, setConfirmExit] = useState({confirmed:false, dialog:false})
  const firebaseContext = React.useContext(FirebaseContext);
  
  async function loadApplicationData(){
    try{  
      let [classes, subjects, teachers] = await Promise.all([
        firebaseContext.getAllSchoolClasses(),
        firebaseContext.getAllSubjects(),
        firebaseContext.getAllTeachers()
      ]);
      
      props.setClassesList(classes);
      props.setSubjectsList(subjects);
      props.setTeachersList(teachers);
    }catch(error){
      console.log(error);
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    loadApplicationData();
    // eslint-disable-next-line
  }, []);
  
  if(confirmExit.confirmed || !props.currentUser){
    return (<Redirect to="/"/>);
  }
  
  return (<Wrapper>
    <Header className="level-100">
     <div></div>
     <div><UserProfile/></div>
    </Header>
    <Main>
      <Router basename="/app">
        <Sidenav exitApp={()=>setConfirmExit((s)=>({...s, dialog:true}))} user={props.currentUser}/>
        <ConfirmExit visible={confirmExit.dialog} close={setConfirmExit}/>
        <Switch>
          <Route path="/home" exact>
            <Home selectedDate={props.selectedDate} selectDate={props.selectDate}/>
          </Route>
          <Route path="/schedule" exact>
            <Schedule/>
          </Route>
          <Route path="/settings" exact>
            <Settings/>
          </Route>
          <Route path="/admin" exact>
            <AdminView/>
          </Route>
        </Switch>
      </Router>
    </Main>
    {loading && 
      <AppLoader>
        <div>
          <div className="spinner"><Spinner/></div>
          <div className="label">Please Wait...</div>
        </div>
      </AppLoader>
   }
  </Wrapper>)
}

MainApp.propTypes = {
  selectedDate:PropTypes.string.isRequired,
  selectDate:PropTypes.func.isRequired,
  currentUser:PropTypes.object.isRequired,
  setClassesList:PropTypes.func.isRequired,
  setSubjectsList:PropTypes.func.isRequired,
  setTeachersList:PropTypes.func.isRequired
}