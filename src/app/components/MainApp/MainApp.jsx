import React, {useState} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Sidenav from "./Sidenav";
import ConfirmExit from "./ConfirmExit";
import UserProfile from "./UserProfile";
import Home from "./Home";
import Settings from "./Settings";
import Admin from "./Admin";
import {Wrapper, Header, Main} from "./styles";
import Modal from "../Modal";

import FirebaseContext from "../../FirebaseContext";

export default function MainApp(props){
  const [confirmExit, setConfirmExit] = useState({confirmed:false, dialog:false})
  const firebaseContext = React.useContext(FirebaseContext);
  
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
        <Sidenav exitApp={()=>setConfirmExit((s)=>({...s, dialog:true}))}/>
        <Modal visible={confirmExit.dialog} close={()=>setConfirmExit((s)=>({...s, dialog:false}))}>
          <ConfirmExit visible={confirmExit.dialog} close={setConfirmExit}/>
        </Modal>
        <Switch>
          <Route path="/home" exact>
            <Home selectedDate={props.selectedDate} selectDate={props.selectDate}/>
          </Route>
          <Route path="/schedule" exact>
            <div>Schedule</div>
          </Route>
          <Route path="/settings" exact>
            <Settings/>
          </Route>
          <Route path="/admin" exact>
            <Admin/>
          </Route>
        </Switch>
      </Router>
    </Main>
  </Wrapper>)
}

MainApp.propTypes = {
  selectedDate:PropTypes.string.isRequired,
  selectDate:PropTypes.func.isRequired,
  currentUser:PropTypes.object
}