import {combineReducers} from "@reduxjs/toolkit";

import selectedDateSlice from "./mainapp/selectedDateSlice";
import currentUserSlice from "./mainapp/currentUserSlice";
import classesListSlice from "./mainapp/classesListSlice";
import subjectsListSlice from "./mainapp/subjectsListSlice";
import teachersListSlice from "./mainapp/teachersListSlice";
import schedulesListSlice from "./mainapp/schedulesListSlice";

const reducer = combineReducers({
  selectedDate:selectedDateSlice.reducer,
  currentUser:currentUserSlice.reducer,
  classesList:classesListSlice.reducer,
  subjectsList:subjectsListSlice.reducer,
  teachersList:teachersListSlice.reducer,
  schedulesList:schedulesListSlice.reducer,
});

export default reducer;