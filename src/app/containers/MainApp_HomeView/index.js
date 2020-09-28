import {connect} from "react-redux";
import Home from "../../components/MainApp/Home";

function mapStateToProps(state){
  return {
    schedulesList:state.schedulesList.data,
    currentUser:state.currentUser,
    classesList:state.classesList.data,
    subjectsList:state.subjectsList.data
  }
}

const MainApp_HomeView = connect(mapStateToProps)(Home);
export default MainApp_HomeView;