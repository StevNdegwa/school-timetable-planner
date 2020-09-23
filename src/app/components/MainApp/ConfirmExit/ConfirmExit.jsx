import React from "react";
import {MdClear} from "react-icons/md";
import {Wrapper, Header, Main, Footer} from "./styles";

import FirebaseContext from "../../../FirebaseContext";

export default function ConfirmExit({visible, close}){
  const firebaseContext = React.useContext(FirebaseContext);
  
  async function confirmUserExit(){
    try{
      let signOut = await firebaseContext.signOutUser()
      
      return close((s)=>({confirmed:true, dialog:false}));
    }catch(error){
      
    }
  }
  
  return (<Wrapper visible={visible}>
    <Header>
      <span></span>
      <span onClick={()=>close((s)=>({...s, dialog:false}))}><MdClear/></span>
    </Header>
    <Main>
      <span>Are you sure you want to exit?</span>
    </Main>
    <Footer>
      <span></span>
      <span>
        <button onClick={()=>close((s)=>({...s, dialog:false}))}>CANCEL</button>
        <button className="primary"  onClick={confirmUserExit}>CONFIRM</button>
      </span>
    </Footer>
  </Wrapper>)
}