import React, {useState} from "react";
import {MdHelp, MdFeedback} from "react-icons/md";

import {Wrapper, Header, Main, Content, Tab} from "./styles";

import Signup from "./Signup";
import Login from "./Login";

export default function Auth(){
  const [tab, setTab] = useState("login");
  
  return (
    <Wrapper>
      <Header>
        <div></div>
        <div style={{borderLeft:"1px solid #bdbdbd", width:"120px",display:"flex", justifyContent:"space-around"}}>
          <MdFeedback/>
          <MdHelp/>
        </div>
      </Header>
      <Main>
        <Content>
          <div className="tabs">
            <Tab onClick={()=>setTab("login")} active={tab === "login"}>Login</Tab>
            <Tab onClick={()=>setTab("signup")} active={tab === "signup"}>Signup</Tab>
          </div>
          <div style={{padding:"0.5em"}}>
            {(tab === "login") ? <Login/> : <Signup/>}
          </div>
        </Content>
      </Main>
    </Wrapper>
  );
}