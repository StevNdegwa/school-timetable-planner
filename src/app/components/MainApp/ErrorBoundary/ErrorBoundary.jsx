import React from "react";

import {Wrapper} from "./styles";

class ErrorBoundary extends React.Components{
  constructor(props){
    super(props)
  }
  
  render(){
    return (<Wrapper></Wrapper>);
  }
}

export default ErrorBoundary;