import React from "react";
import PropTypes from "prop-types";

import Select from "../../Select";
import Tab from "./Tab";
import {Wrapper, Header, Main} from "./styles";

export default function Schedule({classesList, subjectsList, teachersList, addNewSchedule, removeSchedule, schedulesList}){
  const [day, setDay] = React.useState({value:"monday",label:"Monday"});
  
  return (<Wrapper>
    <Header>
      <div className="day filter">
        <Select 
          options = {[
            {value:"sunday",label:"Sunday"},
            {value:"monday",label:"Monday"},
            {value:"tuesday",label:"Tuesday"},
            {value:"wednesday",label:"Wednesday"},
            {value:"thursday",label:"Thursday"},
            {value:"friday",label:"Friday"},
            {value:"saturday",label:"Saturday"}
          ]}
          label="Day of the week"
          info="Filter schedule by day of week"
          currentOption={day}
          selectOption={setDay}
        />
      </div>
    </Header>
    <Main>
      {classesList.map((c)=>(
        <Tab 
          key={c.code} 
          schoolClass={c} 
          classesList={classesList} 
          subjectsList={subjectsList}
          teachersList={teachersList}
          day={day}
          schedulesList={schedulesList[day.value].filter((s)=>(s.class === c.code))}
          addNewSchedule={addNewSchedule}
          removeSchedule={removeSchedule}
        />
      ))}
    </Main>
  </Wrapper>)
}

Schedule.propTypes = {
  classesList:PropTypes.array.isRequired,
  subjectsList:PropTypes.array.isRequired,
  teachersList:PropTypes.array.isRequired,
  addNewSchedule:PropTypes.func.isRequired,
  removeSchedule:PropTypes.func.isRequired,
  schedulesList:PropTypes.object.isRequired
}