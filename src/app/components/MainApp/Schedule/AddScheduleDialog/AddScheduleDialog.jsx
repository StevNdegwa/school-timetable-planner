import React from "react";
import PropTypes from "prop-types";
import {MdClose} from "react-icons/md";

import Select from "../../../Select";
import Modal, {Header, Main, Footer} from "../../../Modal";
import {Wrapper, Section} from "./styles";

export default function NewRecordDialog({currentOptions, visible, cancel, editFields, save, classTitle, subjectsList, teachersList, day}){
  
  function selectSubjectOption(option){
    editFields("subject", option)
  }
  
  function selectTeacherOption(option){
    editFields("teacher", option);
  }
  
  function selectStartTimeOption(option){
    editFields("start", option);
  }
  
  function selectEndTimeOption(option){
    editFields("end", option);
  }
  
  return (
    <Modal visible={visible} close={cancel}>
      <Wrapper>
        <Header>
          <span></span>
          <span onClick={cancel}><MdClose/></span>
        </Header>
        <Main>
          <Section>
            <b>{classTitle}, {day.label}</b>
          </Section>
          <Section>
            <Select 
              options = {[
                {value:"06:00",label:"06:00"},
                {value:"07:00",label:"07:00"},
                {value:"08:00",label:"08:00"},
                {value:"09:00",label:"09:00"},
                {value:"10:00",label:"10:00"},
                {value:"11:00",label:"11:00"},
                {value:"12:00",label:"12:00"},
                {value:"13:00",label:"13:00"},
                {value:"14:00",label:"14:00"},
                {value:"15:00",label:"15:00"},
                {value:"16:00",label:"16:00"},
                {value:"17:00",label:"17:00"},
                {value:"18:00",label:"18:00"}
              ]}
              label="Start Time"
              info="Starting time"
              currentOption={currentOptions.start}
              selectOption={selectStartTimeOption}
            />
          </Section>
          <Section>
            <Select 
              options = {[
                {value:"06:00",label:"06:00"},
                {value:"07:00",label:"07:00"},
                {value:"08:00",label:"08:00"},
                {value:"09:00",label:"09:00"},
                {value:"10:00",label:"10:00"},
                {value:"11:00",label:"11:00"},
                {value:"12:00",label:"12:00"},
                {value:"13:00",label:"13:00"},
                {value:"14:00",label:"14:00"},
                {value:"15:00",label:"15:00"},
                {value:"16:00",label:"16:00"},
                {value:"17:00",label:"17:00"},
                {value:"18:00",label:"18:00"}
              ]}
              label="End Time"
              info="Ending time"
              currentOption={currentOptions.end}
              selectOption={selectEndTimeOption}
            />
          </Section>
          <Section>
            <Select 
              options = {subjectsList.map((l)=>({value:l.code, label:l.name}))}
              label="Subject"
              info="Subjects taught in the school"
              currentOption={currentOptions.subject}
              selectOption={selectSubjectOption}
            />
          </Section>
          <Section>
            <Select 
              options = {teachersList.map((l)=>({value:l.code, label:l.name}))}
              label="Teacher"
              info="Teacher teaching in the school"
              currentOption={currentOptions.teacher}
              selectOption={selectTeacherOption}
            />
          </Section>
        </Main>
        <Footer>
          <span></span>
          <span>
            <button onClick={cancel}>CANCEL</button>
            <button className="primary" onClick={()=>save()}>SAVE</button>
          </span>
        </Footer>
      </Wrapper>
    </Modal>
  )
}

NewRecordDialog.propTypes = {
  visible:PropTypes.bool.isRequired,
  editFields:PropTypes.func.isRequired,
  cancel:PropTypes.func.isRequired,
  currentOptions:PropTypes.object.isRequired,
  save:PropTypes.func.isRequired,
  classTitle:PropTypes.string.isRequired,
  subjectsList:PropTypes.array.isRequired,
  teachersList:PropTypes.array.isRequired,
  day:PropTypes.object
}