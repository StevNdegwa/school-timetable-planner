import React from "react";
import {CSSTransition} from "react-transition-group";
import {MdAccountCircle} from "react-icons/md";
import {Wrapper, Control, Content} from "./styles";

const UserProfile = React.memo(({user})=>{
  const [contentVisible, setContentVisible] = React.useState(false);
  
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
      <Control onClick={()=>setContentVisible((v)=>!v)} open={contentVisible}><MdAccountCircle/></Control>
      <CSSTransition in={contentVisible} timeout={200} classNames="fade">
        <Content className="level-300" visible={contentVisible}>
          <li>{user.displayName}</li>
          <li>{user.email}</li>
          <li></li>
        </Content>
      </CSSTransition>
    </Wrapper>
  )
});

export default UserProfile;