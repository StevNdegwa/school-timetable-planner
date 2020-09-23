import React from "react";
import PropTypes from "prop-types";
import HomeCalendar from "./HomeCalendar";
import {Wrapper, Status} from "./styles";

export default function Home({selectedDate, selectDate}){
  return (
    <Wrapper>
      <Status>
        {new Date(selectedDate).toDateString()}
      </Status>
      <HomeCalendar selectedDate={selectedDate} selectDate={selectDate}/>
    </Wrapper>
  );
}

Home.propTypes = {
  selectedDate:PropTypes.string.isRequired,
  selectDate:PropTypes.func.isRequired
}