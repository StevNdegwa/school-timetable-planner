import React from "react";

import Home from "./Home.jsx";
import DailySchedule from "./DailySchedule";
import HomeCalendar from "./HomeCalendar";
import {Status} from "./styles";
import {shallow, mount} from "enzyme";

describe("Test Home components", ()=>{
  const selectDate = jest.fn();
  const setClassesList = jest.fn();
  const setSubjectsList = jest.fn();
  const setTeachersList = jest.fn();
  const setScheduleLists = jest.fn();
  
  const homeApp = shallow(<Home selectedDate="09/29/2020" selectDate={selectDate} schedulesList={{}} user={{}} classesList={[]} subjectsList={[]}/>);
  
  test("Determine if required components are rendered", ()=>{
    
    expect(homeApp.contains([
      <Status>{new Date("09/29/2020").toDateString()}</Status>,
      <HomeCalendar selectedDate={new Date("09/29/2020")} selectDate={selectDate}/>,
      <DailySchedule  selectedDate={new Date("09/29/2020")} schedulesList={{}} user={{}} classesList={[]} subjectsList={[]}/>
    ])).toBe(true);
    
  })
})