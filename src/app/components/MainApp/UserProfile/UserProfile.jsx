import React from "react";
import {CSSTransition} from "react-transition-group";
import {MdAccountCircle} from "react-icons/md";
import {Wrapper, Control, Content} from "./styles";

//import FirebaseContext from "../../../FirebaseContext";

const UserProfile = React.memo(()=>{
  const [contentVisible, setContentVisible] = React.useState(false);
  //const firebaseContext = React.useContext(FirebaseContext);
  
  function handleBodyClick(){
    setContentVisible(false);
  }
  
  document.body.addEventListener("click", handleBodyClick);
  
  React.useEffect(()=>{
    return function cleanup(){
      document.body.removeEventListener("click", handleBodyClick);
    }
  })
  
  return (
    <Wrapper>
      <Control onClick={()=>setContentVisible((v)=>!v)}><MdAccountCircle/></Control>
      <CSSTransition in={contentVisible} timeout={200} classNames="fade">
        <Content  className="level-300" visible={contentVisible}>
          
        </Content>
      </CSSTransition>
    </Wrapper>
  )
});

export default UserProfile;