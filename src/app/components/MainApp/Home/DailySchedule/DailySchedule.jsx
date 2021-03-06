import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {Wrapper, Lessons, Lesson} from "./styles";

import GoogleCalendar from "../../../../helpers/GoogleCalendar";

export default function DailySchedule({selectedDate, schedulesList, user, classesList, subjectsList}){
  
  const userDayLessons = useCallback(()=>{
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let key = days[selectedDate.getDay()];
    let list = [];
      
    if(Array.isArray(schedulesList[key])){
      list.push(...schedulesList[key].filter((s)=>(s.teacher === user.email)))
    }
      
    return list.map((lesson)=>{
      let subject = subjectsList.find((l)=>(l.code === lesson.subject)).name;
      let classLocation = classesList.find((l)=>(l.code === lesson.class)).name;
        
      return {...lesson, classLocation, subject, dayIndex:days.findIndex((d)=>(d === lesson.day))}
    });
      
      // eslint-disable-next-line
  }, [selectedDate, schedulesList]);

  const sendEventToGoogleCalendar = useCallback(GoogleCalendar.sendEventToCalendar, [])
    
  return (<Wrapper>
    <Lessons>
      {userDayLessons().map((lesson)=>(
        <Lesson key={lesson.id}>
          <div className="class">{lesson.classLocation}</div>
          <div className="subject">{lesson.subject}</div>
          <div className="time">
            <span><span className="label">Start:</span>&nbsp;{lesson.start}</span> &nbsp;
            <span><span className="label">End:</span>&nbsp;{lesson.end}</span>
          </div>
          <div className="add-to-calendar">
            <button className="primary" disabled={!user.isGoogleAccount}
              onClick={()=>sendEventToGoogleCalendar(lesson, "School lesson", user.email)}>
              Add To Google Calendar
            </button>
          </div>
        </Lesson>
      ))}
    </Lessons>
  </Wrapper>)
}

DailySchedule.propTypes = {
  selectedDate:PropTypes.instanceOf(Date).isRequired,
  schedulesList:PropTypes.object.isRequired,
  user:PropTypes.object.isRequired,
  classesList:PropTypes.array.isRequired,
  subjectsList:PropTypes.array.isRequired
}