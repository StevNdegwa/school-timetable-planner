import React from "react";

import {Wrapper} from "./styles";
import {Status, Spinner} from "../styles";

export default function PageLoader(){
  return (<Wrapper>
    <Status>
      <div className="spinner"><Spinner/></div>
      <div className="label">Loading Page...</div>
    </Status>
  </Wrapper>);
}