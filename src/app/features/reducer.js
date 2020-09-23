import {combineReducers} from "@reduxjs/toolkit";

import selectedDateSlice from "./mainapp/selectedDateSlice";
import currentUserSlice from "./mainapp/currentUserSlice";

const reducer = combineReducers({
  selectedDate:selectedDateSlice.reducer,
  currentUser:currentUserSlice.reducer
});

export default reducer;