import {connect} from "react-redux";

import MainApp from "../../components/MainApp";

import selectedDateSlice from "../../features/mainapp/selectedDateSlice";
import classesListSlice from "../../features/mainapp/classesListSlice";
import subjectsListSlice from "../../features/mainapp/subjectsListSlice";
import teachersListSlice from "../../features/mainapp/teachersListSlice";

function mapStateToProps(state){
  return {
    selectedDate:state.selectedDate,
    currentUser:state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectDate:(date)=>dispatch(selectedDateSlice.actions.setDate(date)),
    setClassesList:(list)=>dispatch(classesListSlice.actions.setClassesList(list)),
    setSubjectsList:(list)=>dispatch(subjectsListSlice.actions.setSubjectsList(list)),
    setTeachersList:(list)=>dispatch(teachersListSlice.actions.setTeachersList(list))
  }
}

const MainAppView = connect(mapStateToProps, mapDispatchToProps)(MainApp);

export default MainAppView;