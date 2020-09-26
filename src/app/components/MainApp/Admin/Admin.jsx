import React from "react";
import PropTypes from "prop-types";
import {MdPlayArrow} from "react-icons/md";

import Classes from "./Classes";
import Subjects from "./Subjects";
import Teachers from "./Teachers";
import {Wrapper, Tabs, Content} from "./styles";

class Admin extends React.Component{
  state = {
    tab:"classes"
  }
  
  tabContent = ()=> {
    let {
      classesList, addNewClassItem, removeClassItem, setClassesList,
      subjectsList, addNewSubjectItem, removeSubjectItem, setSubjectsList,
      teachersList, addNewTeacherItem, removeTeacherItem, setTeachersList
    } = this.props;
    
    switch(this.state.tab){
      case "classes":
        return <Classes 
          list={classesList} 
          add={addNewClassItem} 
          remove={removeClassItem} 
          setList={setClassesList}
        />
      case "subjects":
        return <Subjects 
          list={subjectsList} 
          add={addNewSubjectItem} 
          remove={removeSubjectItem} 
          setList={setSubjectsList}
        />
      case "teachers":
        return <Teachers 
          list={teachersList} 
          add={addNewTeacherItem} 
          remove={removeTeacherItem} 
          setList={setTeachersList}
        />
      default:
        return <div>Error</div>
    }
  }
  
  render(){
    return (<Wrapper>
      <Tabs>
        <div onClick={()=>this.setState({tab:"classes"})}>
          <div>Classes</div><div><MdPlayArrow/></div>
        </div>
        <div onClick={()=>this.setState({tab:"subjects"})}>
          <div>Lessons</div><div><MdPlayArrow/></div>
        </div>
        <div onClick={()=>this.setState({tab:"teachers"})}>
          <div>Teachers</div><div><MdPlayArrow/></div>
        </div>
      </Tabs>
      <Content>
        {this.tabContent()}
      </Content>
    </Wrapper>
    )
  }
}



Admin.propTypes = {
  setClassesList:PropTypes.func.isRequired,
  addNewClassItem:PropTypes.func.isRequired,
  removeClassItem:PropTypes.func.isRequired,
  classesList:PropTypes.object.isRequired,
  setSubjectsList:PropTypes.func.isRequired,
  addNewSubjectItem:PropTypes.func.isRequired,
  removeSubjectItem:PropTypes.func.isRequired,
  subjectsList:PropTypes.object.isRequired,
  setTeachersList:PropTypes.func.isRequired,
  addNewTeacherItem:PropTypes.func.isRequired,
  removeTeacherItem:PropTypes.func.isRequired,
  teachersList:PropTypes.object.isRequired
}

export default Admin;