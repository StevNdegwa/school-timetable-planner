import React from "react";
import PropTypes from "prop-types";

import DataTable from "../DataTable";
import {Wrapper} from "./styles";

import FirebaseContext from "../../../../FirebaseContext.js";

class Subjects extends React.Component{
  constructor(props){
    super(props);
    this.addSubject = this.addSubject.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);
    this.state = {
      loading:false
    }
  }
  
  async addSubject(item){
    this.setState({loading:true});
    try{
      let doc = await this.context.addNewSubject(item);
      this.props.add({id:doc.id, ...item});
    }catch(error){
      console.log(error);
    }
    this.setState({loading:false});
  }
  
  async deleteSubject(id){
    this.setState({loading:true});
    try{
      await this.context.removeSubject(id);
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
        add={this.addSubject}
        remove={this.deleteSubject}
        loading={loading}
      />
    </Wrapper>
    );
  }
}

Subjects.contextType = FirebaseContext;

Subjects.propTypes = {
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

export default Subjects;