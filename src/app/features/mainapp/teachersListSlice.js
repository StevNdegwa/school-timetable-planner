import {createSlice} from "@reduxjs/toolkit";

const teachersListSlice = createSlice({
  name:"teachersList",
  initialState:{loaded:false, data:[]},
  reducers:{
    setTeachersList(state, actions){
      return {loaded:true, data:actions.payload};
    },
    addNewTeacherItem(state, actions){
      return {...state, data: state.data.concat(actions.payload)};
    },
    removeTeacherItem(state, actions){
      return {...state, data: state.data.filter((r)=>(r.id !== actions.payload))}
    }
  }
})

export default teachersListSlice;