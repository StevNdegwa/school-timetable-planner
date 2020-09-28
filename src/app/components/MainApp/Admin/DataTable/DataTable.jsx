import React, {useState} from "react";
import PropTypes from "prop-types";
import {MdAdd, MdRemove} from "react-icons/md";

import AddRowDialog from "./AddRowDialog";
import {TextInput} from "../../../Inputs";
import {Wrapper,Status, Loader, Table, Row, Cell} from "./styles";

export default function DataTable({data, add, remove, loading, head}){
  const [addDialog, openAddDialog, closeAddDialog] = useAddDialog();
  const [newRecord, startEditing, stopEditing, editField] = useAddRecord();
  
  function useAddDialog(){
    const [addDialog, setAddDialog] = useState(false);
    let open = ()=>setAddDialog(true),
      close = ()=>setAddDialog(false)
    return [addDialog, open, close];
  }
  
  function useAddRecord(){
    const [newRecord, setNewRecord] = useState({active:false});
    
    const startEditing = ()=>setNewRecord({active:true, record:{code:"",name:""}});
    const stopEditing = ()=>setNewRecord({active:false})
    const editField = (key, val)=>setNewRecord({
      active:true, 
      record:{
        ...newRecord.record,
        [key]:val
      }
    })
    
    return [newRecord, startEditing, stopEditing, editField];
  }
  
  function handleCodeChange(val){
    editField("code", val)
  }
  
  function handleNameChange(val){
    editField("name", val)
  }
  
  function handleAddClick(){
    startEditing();
    openAddDialog();
  }
  
  function handleCancelClick(){
    stopEditing();
    closeAddDialog();
  }
  
  function handleSaveNewRow(){
    add(newRecord.record);
    stopEditing();
    closeAddDialog();
  }
  
  return (<Wrapper>
    <AddRowDialog
      visible={addDialog} 
      cancel={handleCancelClick}
      save={handleSaveNewRow}
    >
      <TextInput label={head[0]} onChange={handleCodeChange}/>
      <TextInput label={head[1]} onChange={handleNameChange}/>
    </AddRowDialog>
    <Table>
      <Row className="heading">
        <Cell className="edit">
          <button onClick={handleAddClick}><MdAdd/></button>
        </Cell>
        <Cell>{head[0]}</Cell>
        <Cell>{head[1]}</Cell>
      </Row>
      {data.map((row)=>(
        <Row key={row.id}>
          <Cell className="edit">
            <button onClick={()=>remove(row.id)}><MdRemove/></button>
          </Cell>
          <Cell>{row.code}</Cell>
          <Cell>{row.name}</Cell>
        </Row>
      ))}
      {newRecord.active && 
        <Row>
          <Cell className="edit">
            <button><MdRemove/></button>
          </Cell>
          <Cell>{newRecord.record.code}</Cell>
          <Cell>{newRecord.record.name}</Cell>
        </Row>
      }
    </Table>
    {loading && <Status><Loader/></Status>}
  </Wrapper>);
}

DataTable.propTypes = {
  data:PropTypes.arrayOf(PropTypes.shape({
    code:PropTypes.string,
    name:PropTypes.string
  })),
  add:PropTypes.func.isRequired,
  remove:PropTypes.func.isRequired,
  loading:PropTypes.bool,
  head:PropTypes.arrayOf(PropTypes.string)
}