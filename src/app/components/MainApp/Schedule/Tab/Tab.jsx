import React, {useState} from "react";
import PropTypes from "prop-types";
import {MdPlayArrow, MdAdd, MdRemove} from "react-icons/md";

import AddScheduleDialog from "../AddScheduleDialog";
import {Wrapper, Control, Content, Table, Row, Cell} from "./styles";

export default function Tab({title}){
  const [open, setOpen] = useState(false);
  const [records, addRecords, removeRecord] = useMaintainRecords();
  const [newRecord, startEditing, stopEditing, editField] = useAddRecord();
  const [addDialog, openAddDialog, closeAddDialog] = useAddDialog();
  
  function handleAddClick(){
    startEditing();
    openAddDialog();
  }
  
  function saveNewRecord(){
    addRecords({...newRecord.record});
    stopEditing();
    closeAddDialog();
  }
  
  function cancelNewrecord(){
    stopEditing();
    closeAddDialog();
  }
  
  function useAddDialog(){
    const [addDialog, setAddDialog] = useState(false);
    let open = ()=>setAddDialog(true),
      close = ()=>setAddDialog(false)
    return [addDialog, open, close];
  }
  
  function useAddRecord(){
    const def = {
      active:false,
      record:{
        start:{value:"6",label:"06:00"},
        end:{value:"6",label:"06:00"},
        time:{start:"08:00", end:"09:00"}, 
        lesson:{value:"hist",label:"History"}, 
        teacher:{value:"3415233",label:"Mr. Ngugi"}
      }
    }
    const [newRecord, setNewRecord] = useState({...def});
    let startEditing = () => setNewRecord((s)=>({...s, active:true})),
      stopEditing = () => setNewRecord({...def}),
      editField = (key, val) => setNewRecord((s)=>({
        ...s,
        record:{
          ...s.record,
          [key]:val
        }
      }));
    
    return [newRecord, startEditing, stopEditing, editField];
  }
  
  function useMaintainRecords(){
    const [records, setRecords] = useState([]);
    let add = (r)=>setRecords((s)=>s.concat(r)),
      remove = (index)=>setRecords((s)=>s.filter((row, i)=>(index !== i)));
    return [records, add, remove];
  }
  
  return (
    <Wrapper>
      <AddScheduleDialog 
        visible={addDialog} 
        cancel={cancelNewrecord}
        save={saveNewRecord}
        editFields={editField}
        currentOptions={newRecord.record}
        classTitle={title}
      />
      <Control active={open ? 1 : 0} onClick={()=>setOpen((s)=>!s)}>
        <span>{title}</span>
        <span><MdPlayArrow/></span>
      </Control>
      {open && 
       <Content>
        <Table>
          <Row className="heading">
            <Cell className="edit">
              <button onClick={handleAddClick}><MdAdd/></button>
            </Cell>
            <Cell>Time</Cell>
            <Cell>Lesson</Cell>
            <Cell>Teacher</Cell>
          </Row>
          {records.map((record, idx)=>(
            <Row>
              <Cell className="edit">
                <button onClick={()=>removeRecord(idx)}><MdRemove/></button>
              </Cell>
              <Cell>{`${record.start.label} - ${record.end.label}`}</Cell>
              <Cell>{record.lesson.label}</Cell>
              <Cell>{record.teacher.label}</Cell>
            </Row>
            ))
          }
          {newRecord.active && 
            <Row>
              <Cell className="edit">
                <button><MdRemove/></button>
              </Cell>
              <Cell>{`${newRecord.record.start.label} - ${newRecord.record.end.label}`}</Cell>
              <Cell>{newRecord.record.lesson.label}</Cell>
              <Cell>{newRecord.record.teacher.label}</Cell>
            </Row>
          }
        </Table>
      </Content>
     }
    </Wrapper>
  )
}

Tab.propTypes = {
  title:PropTypes.string.isRequired
}