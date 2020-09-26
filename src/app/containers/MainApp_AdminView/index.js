import {connect} from "react-redux";
import Admin from "../../components/MainApp/Admin";

import classesListSlice from "../../features/mainapp/classesListSlice";
import subjectsListSlice from "../../features/mainapp/subjectsListSlice";
import teachersListSlice from "../../features/mainapp/teachersListSlice";

function mapStateToProps(state){
  return {
    classesList:state.classesList,
    subjectsList:state.subjectsList,
    teachersList:state.teachersList
  }
}

function mapDispatchToProps(dispatch){
  return {
    setClassesList:(list)=>dispatch(classesListSlice.actions.setClassesList(list)),
    addNewClassItem:(item)=>dispatch(classesListSlice.actions.addNewClassItem(item)),
    removeClassItem:(id)=>dispatch(classesListSlice.actions.removeClassItem(id)),
    setSubjectsList:(list)=>dispatch(subjectsListSlice.actions.setSubjectsList(list)),
    addNewSubjectItem:(item)=>dispatch(subjectsListSlice.actions.addNewSubjectItem(item)),
    removeSubjectItem:(id)=>dispatch(subjectsListSlice.actions.removeSubjectItem(id)),
    setTeachersList:(list)=>dispatch(teachersListSlice.actions.setTeachersList(list)),
    addNewTeacherItem:(item)=>dispatch(teachersListSlice.actions.addNewTeacherItem(item)),
    removeTeacherItem:(id)=>dispatch(teachersListSlice.actions.removeTeacherItem(id))
  }
}

const MainApp_AdminView = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default MainApp_AdminView;