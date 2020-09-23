import {connect} from "react-redux";

import currentUserSlice from "../../features/mainapp/currentUserSlice";
import Auth from "../../components/Auth";

function mapStateToProps(state){
  return {
    currentUser:state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    setCurrentUser:(user)=>dispatch(currentUserSlice.actions.setCurrentUser(user))
  }
}

const AuthView = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthView;