import React from "react";
import {MdPlayArrow} from "react-icons/md";

import Account from "./Account";
import {Wrapper, Tabs, Content} from "./styles";

export default function Settings(){
  const [tab, setTab] = React.useState("account");
  
  function tabContent(){
    switch(tab){
      case "account":
        return <Account/>
      case "appearance":
        return <div>Appearance</div>
      case "privacyNSecurity":
        return <div>Privacy & Security</div>
      case "about":
        return <div>About</div>
      default:
        return <div>Error</div>
    }
  }
  
  return (<Wrapper>
    <Tabs>
      <div onClick={()=>setTab("account")}>
        <div>Account</div><div><MdPlayArrow/></div>
      </div>
      <div onClick={()=>setTab("appearance")}>
        <div>Appearance</div><div><MdPlayArrow/></div>
      </div>
      <div onClick={()=>setTab("privacyNSecurity")}>
        <div>Privacy & Security</div><div><MdPlayArrow/></div>
      </div>
      <div onClick={()=>setTab("about")}>
        <div>About</div><div><MdPlayArrow/></div>
      </div>
    </Tabs>
    <Content>
      {tabContent()}
    </Content>
  </Wrapper>)
}