import React from "react";
import {MdClear} from "react-icons/md";

import Modal, {Header, Main, Footer} from "../../Modal";
import {Wrapper} from "./styles";

import FirebaseContext from "../../../FirebaseContext";

export default function ConfirmExit({visible, close}){
  const firebaseContext = React.useContext(FirebaseContext);
  
  async function confirmUserExit(){
    try{
      await firebaseContext.signOutUser()
      
      return close((s)=>({confirmed:true, dialog:false}));
    }catch(error){
      
    }
  }
  
  return (
    <Modal visible={visible} close={close}>
      <Wrapper visible={visible}>
        <Header>
          <span></span>
          <span onClick={()=>close((s)=>({...s, dialog:false}))}><MdClear/></span>
        </Header>
        <Main>
          <div style={{lineHeight:"50px",fontWeight:"600", height:"100px"}}>
            Are you sure you want to exit?
          </div>
        </Main>
        <Footer>
          <span></span>
          <span>
            <button onClick={()=>close((s)=>({...s, dialog:false}))}>CANCEL</button>
            <button className="primary"  onClick={confirmUserExit}>CONFIRM</button>
          </span>
        </Footer>
      </Wrapper>
    </Modal>
  )
}