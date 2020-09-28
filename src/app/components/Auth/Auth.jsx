import React, {useState} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {MdHelp, MdFeedback} from "react-icons/md";

import {Wrapper, Header, Main, Content, Tab, AuthStatus, Loader} from "./styles";

import FirebaseContext from "../../FirebaseContext";
import Signup from "./Signup";
import Login from "./Login";

export default function Auth({setCurrentUser, currentUser}){
  const [tab, setTab] = useState("login");
  const [authStatus, setAuthStatus] = useState({loading:false, error:null, successful:false})
  
  const firebaseContext = React.useContext(FirebaseContext);
  
  React.useEffect(()=>{
    firebaseContext.getAuth().onAuthStateChanged((user)=>{
      if(user){
        let {displayName, email, photoURL, uid} = user;
        setCurrentUser({displayName, email, photoURL, uid});
      }
    })
  }, [authStatus.successful, firebaseContext, setCurrentUser]);
  
  function setLoading(loading){
    return setAuthStatus({successful:false, error:null, loading});
  }
  
  function setError(error){
    return setAuthStatus({successful:false, loading:false, error});
  }
  
  function setSuccessful(successful){
    return setAuthStatus((s)=>({...s, successful}));
  }
  
  if(authStatus.successful && !!currentUser){
    return (<Redirect to="/app/home"/>);
  }
  
  return (
    <Wrapper>
      <Header>
        <div></div>
        <div style={{borderLeft:"1px solid #bdbdbd", width:"120px",display:"flex", justifyContent:"space-around"}}>
          <MdFeedback/>
          <MdHelp/>
        </div>
        <CSSTransition in={authStatus.loading} timeout={200} classNames="fade">
          <AuthStatus show={authStatus.loading ? 1 : 0}>
            <Loader className="loader"/>
          </AuthStatus>
        </CSSTransition>
        <CSSTransition in={!!authStatus.error} timeout={200} classNames="fade">
          <AuthStatus show={!!authStatus.error ? 1 : 0}>
            <span>{authStatus.error}</span>
          </AuthStatus>
        </CSSTransition>
      </Header>
      <Main>
        <Content>
          <div className="tabs">
            <Tab onClick={()=>setTab("login")} active={tab === "login"}>Login</Tab>
            <Tab onClick={()=>setTab("signup")} active={tab === "signup"}>Signup</Tab>
          </div>
          <div style={{padding:"0.5em"}}>
            {(tab === "login") ? 
              <Login setSuccessful={setSuccessful} setLoading={setLoading} setError={setError}/> : 
              <Signup setSuccessful={setSuccessful} setLoading={setLoading} setError={setError}/>
            }
          </div>
        </Content>
      </Main>
    </Wrapper>
  );
}

Auth.propTypes = {
  setCurrentUser:PropTypes.func.isRequired,
  currentUser:PropTypes.object
}