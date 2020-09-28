import React from "react";
import PropTypes from "prop-types";
import DataTable from "../DataTable";
import {Wrapper} from "./styles";

import FirebaseContext from "../../../../FirebaseContext.js";

class Teachers extends React.Component{
  constructor(props){
    super(props);
    this.addTeacher = this.addTeacher.bind(this);
    this.deleteTeacher = this.deleteTeacher.bind(this);
    this.state = {
      loading:false
    }
  }
  
  async addTeacher(item){
    this.setState({loading:true});
    try{
      let doc = await this.context.addNewTeacher(item);
      this.props.add({id:doc.id, ...item});
    }catch(error){
      console.log(error);
    }
    this.setState({loading:false});
  }
  
  async deleteTeacher(id){
    this.setState({loading:true});
    try{
      await this.context.removeTeacher(id);
      this.props.remove(id);
    }catch(error){
      console.log(error);
    }
    this.setState({loading:false});
  }
  
  render(){
    let {list} = this.props;
    let {loading} = this.state;
    return (<Wrapper>
      <DataTable 
        data={list.data}
        add={this.addTeacher}
        remove={this.deleteTeacher}
        loading={loading}
        head={["Email", "Name"]}
      />
    </Wrapper>
    );
  }
}

Teachers.contextType = FirebaseContext;

Teachers.propTypes = {
  list:PropTypes.shape({
    loaded:PropTypes.bool.isRequired,
    data:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string,
      code:PropTypes.string,
      name:PropTypes.string
    }))
  }),
  add:PropTypes.func.isRequired,
  remove:PropTypes.func.isRequired,
  setList:PropTypes.func.isRequired
}

export default Teachers;