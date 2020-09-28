import React from "react";
import {connect} from "react-redux";

const Button = React.memo((props)=>(<button {...props}>{props.children}</button>));

function mapStateToProps(state){
  return {
    disabled:Boolean(state.currentUser && state.currentUser.email !== "admin@timetableplanner.edu")
  }
}

function mapDispatchToProps(){
  return {}
}

const ActionButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ActionButton;