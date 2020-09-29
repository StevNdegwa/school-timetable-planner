import React from "react";
import PropTypes from "prop-types";
import {MdPlayArrow} from "react-icons/md";

import Account from "./Account";
import {Wrapper, Tabs, Content} from "./styles";

export default function Settings({user}){
  const [tab, setTab] = React.useState("account");
  
  function tabContent(){
    switch(tab){
      case "account":
        return <Account user={user}/>
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
      <div onClick={()=>setTab("about")}>
        <div>About</div><div><MdPlayArrow/></div>
      </div>
    </Tabs>
    <Content>
      {tabContent()}
    </Content>
  </Wrapper>)
}

Settings.propTypes = {
  user:PropTypes.object.isRequired
}