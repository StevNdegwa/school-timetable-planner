import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import {MdPlayArrow, MdAdd, MdRemove} from "react-icons/md";

import AddScheduleDialog from "../AddScheduleDialog";
import {Wrapper, Control, Content, Table, Row, Cell, Status, Loader} from "./styles";

import FirebaseContext from "../../../../FirebaseContext";


let mounted = false;

export default function Tab({schoolClass, day, classesList, subjectsList, teachersList, schedulesList, removeSchedule, addNewSchedule}){
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newRecord, startEditing, stopEditing, editField] = useAddRecord();
  const [addDialog, openAddDialog, closeAddDialog] = useAddDialog();
  
  let firebaseContext = useContext(FirebaseContext);
  
  React.useEffect(()=>{
    mounted = true;
    return function(){
      mounted = false;
    }
  })
  
  function handleAddClick(){
    startEditing();
    openAddDialog();
  }
  
  async function saveNewRecord(){
    try{
      closeAddDialog();
      
      setLoading(true);
      
      let {subject, teacher, start, end} = newRecord.record;
      
      let schedule = {class:schoolClass.code, subject:subject.value, teacher:teacher.value, start:start.value, end:end.value, day:day.value};
      
      let doc = await firebaseContext.addNewSchedule(schedule);
      
      addNewSchedule(day.value, {id:doc.id, ...schedule});
      
      if(mounted) stopEditing();
      
    }catch(error){
      console.log(error);
    }
    
    setLoading(false);
  }
  
  async function deleteRecord(id){
    setLoading(true);
    try{
      
      await firebaseContext.removeSchedule(id);
      
      removeSchedule(day.value, id);
      
    }catch(error){
      console.log(error);
    } 
    setLoading(false);    
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
        start:{value:"06:00", label:"06:00"},
        end:{value:"06:00", label:"06:00"}, 
        subject:{value:"C001", label:"Mathematics"}, 
        teacher:{value:"T001", label:"Mr. Ngugi"}
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
  
  return (
    <Wrapper>
      <AddScheduleDialog 
        visible={addDialog} 
        cancel={cancelNewrecord}
        save={saveNewRecord}
        editFields={editField}
        currentOptions={newRecord.record}
        classTitle={schoolClass.name}
        subjectsList={subjectsList}
        teachersList={teachersList}
        day={day}
      />
      <Control active={open ? 1 : 0} onClick={()=>setOpen((s)=>!s)}>
        <span>{schoolClass.name}</span>
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
            <Cell>Subject</Cell>
            <Cell>Teacher</Cell>
          </Row>
          {schedulesList.map((record)=>{
            let subject = subjectsList.find((s)=>(s.code === record.subject));
            let teacher = teachersList.find((s)=>(s.code === record.teacher));
            return (
              <Row key={record.id}>
                <Cell className="edit">
                  <button onClick={()=>deleteRecord(record.id)}><MdRemove/></button>
                </Cell>
                <Cell>{`${record.start} - ${record.end}`}</Cell>
                <Cell>{subject.name}</Cell>
                <Cell>{teacher.name}</Cell>
              </Row>
            )
          })
          }
          {newRecord.active && 
            <Row>
              <Cell className="edit">
                <button><MdRemove/></button>
              </Cell>
              <Cell>{`${newRecord.record.start.label} - ${newRecord.record.end.label}`}</Cell>
              <Cell>{newRecord.record.subject.label}</Cell>
              <Cell>{newRecord.record.teacher.label}</Cell>
            </Row>
          }
        </Table>
        {loading && <Status><Loader/></Status>}
      </Content>
     }
    </Wrapper>
  )
}

Tab.propTypes = {
  classesList:PropTypes.array, 
  subjectsList:PropTypes.array, 
  teachersList:PropTypes.array,
  day:PropTypes.shape({
    value:PropTypes.string,
    label:PropTypes.string
  }),
  schedulesList:PropTypes.array
}