import React from "react";
import PropTypes from "prop-types";
import {MdClear} from "react-icons/md";

import Modal, {Header, Main, Footer} from "../../Modal";
import {Wrapper} from "./styles";

import FirebaseContext from "../../../FirebaseContext";

export default function ConfirmExit({visible, closeLogOutDialog, logOut}){
  const firebaseContext = React.useContext(FirebaseContext);
  
  async function confirmUserExit(){
    try{
      await firebaseContext.signOutUser()
      
      return logOut();
    }catch(error){
      console.log(error)
    }
  }
  
  return (
    <Modal visible={visible} close={closeLogOutDialog}>
      <Wrapper visible={visible}>
        <Header>
          <span></span>
          <span onClick={()=>closeLogOutDialog()}><MdClear/></span>
        </Header>
        <Main>
          <div style={{lineHeight:"50px",fontWeight:"600", height:"100px"}}>
            Are you sure you want to exit?
          </div>
        </Main>
        <Footer>
          <span></span>
          <span>
            <button onClick={()=>closeLogOutDialog()}>CANCEL</button>
            <button className="primary"  onClick={confirmUserExit}>CONFIRM</button>
          </span>
        </Footer>
      </Wrapper>
    </Modal>
  )
}

ConfirmExit.propTypes = {
  closeLogOutDialog:PropTypes.func.isRequired,
  logOut:PropTypes.func.isRequired
}