import {connect} from "react-redux";

import selectedDateSlice from "../../features/mainapp/selectedDateSlice";
import MainApp from "../../components/MainApp";

function mapStateToProps(state){
  return {
    selectedDate:state.selectedDate,
    currentUser:state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectDate:(date)=>dispatch(selectedDateSlice.actions.setDate(date)),
    setCurrentUser:(user)=>dispatch
  }
}

const MainAppView = connect(mapStateToProps, mapDispatchToProps)(MainApp);

export default MainAppView;