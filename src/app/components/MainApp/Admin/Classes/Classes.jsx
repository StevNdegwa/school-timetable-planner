import React from "react";
import PropTypes from "prop-types";
import DataTable from "../DataTable";
import {Wrapper} from "./styles";

import FirebaseContext from "../../../../FirebaseContext.js";

class Classes extends React.Component{
  constructor(props){
    super(props);
    this.addClass = this.addClass.bind(this);
    this.deleteClass = this.deleteClass.bind(this);
    this.state = {
      loading:false
    }
  }
  
  async addClass(item){
    this.setState({loading:true});
    try{
      let doc = await this.context.addNewSchoolClass(item);
      this.props.add({id:doc.id, ...item});
    }catch(error){
      console.log(error);
    }
    this.setState({loading:false});
  }
  
  async deleteClass(id){
    this.setState({loading:true});
    try{
      await this.context.removeSchoolClassItem(id);
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
        add={this.addClass}
        remove={this.deleteClass}
        loading={loading}
        head={["Code", "Name"]}
      />
    </Wrapper>
    );
  }
}

Classes.contextType = FirebaseContext;

Classes.propTypes = {
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

export default Classes;