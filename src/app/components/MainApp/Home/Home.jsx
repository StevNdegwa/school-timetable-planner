import React from "react";
import PropTypes from "prop-types";
import HomeCalendar from "./HomeCalendar";
import DailySchedule from "./DailySchedule";
import {Wrapper, Status} from "./styles";

export default function Home(props){
  const date = new Date(props.selectedDate);
  return (
    <Wrapper admin={props.user.isAdmin}>
      <Status>
        {date.toDateString()}
      </Status>
      <HomeCalendar selectedDate={date} selectDate={props.selectDate}/>
      {!props.user.isAdmin && 
        <DailySchedule 
          selectedDate={date} 
          schedulesList={props.schedulesList} 
          user={props.user}
          classesList={props.classesList}
          subjectsList={props.subjectsList}
        />
      }
    </Wrapper>
  );
}

Home.propTypes = {
  selectedDate:PropTypes.string.isRequired,
  selectDate:PropTypes.func.isRequired,
  schedulesList:PropTypes.object.isRequired,
  user:PropTypes.object.isRequired,
  subjectsList:PropTypes.array.isRequired,
  classesList:PropTypes.array.isRequired
}