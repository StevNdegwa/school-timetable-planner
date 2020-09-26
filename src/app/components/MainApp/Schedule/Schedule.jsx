import React from "react";

import Tab from "./Tab";
import {Wrapper, Header, Main} from "./styles";

export default function Schedule(){
  
  return (<Wrapper>
    <Header></Header>
    <Main>
      <Tab title="Form 1"/>
      <Tab title="Form 2"/>
      <Tab title="Form 3"/>
      <Tab title="Form 4"/>
    </Main>
  </Wrapper>)
}