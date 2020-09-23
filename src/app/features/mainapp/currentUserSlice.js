import {createSlice} from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name:"currentUser",
  initialState:null,
  reducers:{
    setCurrentUser(state, actions){
      return actions.payload;
    }
  }
});

export default currentUserSlice;