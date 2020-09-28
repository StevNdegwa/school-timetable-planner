import {connect} from "react-redux";

import Schedule from "../../components/MainApp/Schedule";
import schedulesListSlice from "../../features/mainapp/schedulesListSlice";

function mapStateToProps(state){
  return {
    classesList:state.classesList.data,
    subjectsList:state.subjectsList.data,
    teachersList:state.teachersList.data,
    schedulesList:state.schedulesList.data
  }
}

function mapDispatchToProps(dispatch){
  return {
    setScheduleLists:(lists)=>dispatch(schedulesListSlice.actions.setScheduleLists(lists)),
    addNewSchedule:(day, schedule)=>dispatch(schedulesListSlice.actions.addNewSchedule({day, schedule})),
    removeSchedule:(day, id)=>dispatch(schedulesListSlice.actions.removeSchedule({day, id}))
  }
}

const MainApp_ScheduleView = connect(mapStateToProps, mapDispatchToProps)(Schedule);
export default  MainApp_ScheduleView;