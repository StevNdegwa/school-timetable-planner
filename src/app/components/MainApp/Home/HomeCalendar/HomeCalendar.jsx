import React from "react";
import PropTypes from "prop-types";
import {MdNavigateBefore, MdNavigateNext, MdFirstPage,MdLastPage} from "react-icons/md";
import Calendar from "react-calendar";
import {Wrapper} from "./styles";

import "./calendar-style.scss";

export default function HomeCalendar({selectDate, selectedDate}){
  
  return (<Wrapper>
    <Calendar
      onChange={(d)=>selectDate(d.toString())}
      value={selectedDate}
      className="home-calendar"
      nextLabel={<MdNavigateNext/>}
      next2Label={<MdLastPage/>}
      prevLabel={<MdNavigateBefore/>}
      prev2Label={<MdFirstPage/>}
    />
  </Wrapper>);
}

HomeCalendar.propTypes = {
  selectDate:PropTypes.func.isRequired,
  selectedDate:PropTypes.instanceOf(Date).isRequired
}