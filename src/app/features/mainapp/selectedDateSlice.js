import {createSlice} from "@reduxjs/toolkit";

const selectedDateSlice = createSlice({
  name:"selectedDate",
  initialState:(new Date()).toString(),
  reducers:{
    setDate(state, action){
      return action.payload.toString();
    }
  }
});

export default selectedDateSlice;