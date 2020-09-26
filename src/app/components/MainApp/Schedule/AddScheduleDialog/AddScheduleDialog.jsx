import React from "react";
import PropTypes from "prop-types";
import {MdClose} from "react-icons/md";

import Select from "../../../Select";
import Modal, {Header, Main, Footer} from "../../../Modal";
import {Wrapper, Section} from "./styles";

export default function NewRecordDialog({currentOptions, visible, cancel, editFields, save, classTitle}){
  
  function selectLessonOption(option){
    editFields("lesson", option)
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
            <b>{classTitle}</b>
          </Section>
          <Section>
            <Select 
              options = {[
                {value:"6",label:"06:00"},
                {value:"6",label:"07:00"},
                {value:"8",label:"08:00"},
                {value:"9",label:"09:00"},
                {value:"10",label:"10:00"},
                {value:"11",label:"11:00"},
                {value:"12",label:"12:00"},
                {value:"13",label:"13:00"},
                {value:"14",label:"14:00"},
                {value:"15",label:"15:00"},
                {value:"16",label:"16:00"},
                {value:"17",label:"17:00"},
                {value:"18",label:"18:00"}
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
                {value:"6",label:"06:00"},
                {value:"6",label:"07:00"},
                {value:"8",label:"08:00"},
                {value:"9",label:"09:00"},
                {value:"10",label:"10:00"},
                {value:"11",label:"11:00"},
                {value:"12",label:"12:00"},
                {value:"13",label:"13:00"},
                {value:"14",label:"14:00"},
                {value:"15",label:"15:00"},
                {value:"16",label:"16:00"},
                {value:"17",label:"17:00"},
                {value:"18",label:"18:00"}
              ]}
              label="End Time"
              info="Ending time"
              currentOption={currentOptions.end}
              selectOption={selectEndTimeOption}
            />
          </Section>
          <Section>
            <Select 
              options = {[
                {value:"math",label:"Mathematics"},
                {value:"eng",label:"English"},
                {value:"hist",label:"History"},
                {value:"bio",label:"Biology"}
              ]}
              label="Lesson"
              info="School lessons"
              currentOption={currentOptions.lesson}
              selectOption={selectLessonOption}
            />
          </Section>
          <Section>
            <Select 
              options = {[
                {value:"5463774",label:"Mr. Chege"},
                {value:"6975793",label:"Mrs. Mburu"},
                {value:"3415233",label:"Mr. Ngugi"},
                {value:"1110283",label:"Madam Doreen"}
              ]}
              label="Teacher"
              info="School teachers"
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
  classTitle:PropTypes.string.isRequired
}