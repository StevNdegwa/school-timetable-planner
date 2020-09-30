import React from "react";

import {Wrapper, Info} from "./styles";

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasError:false,
      error:""
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError:true, 
      error:error.message||"An unexpected error occured."
    };  
  }
  
  componentDidCatch(error, errorInfo) {    
    console.log(error);  
  }
  
  render(){
    let {hasError, error} = this.state;
    if(hasError){
      return (<Wrapper>
        <Info>
          <div>{error}</div>
          <div><a href="/" alt="Homepage"><button className="primary">Exit Application</button></a></div>
        </Info>
      </Wrapper>);
    }else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary;