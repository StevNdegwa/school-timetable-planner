import {createSlice} from "@reduxjs/toolkit";

const subjectsListSlice = createSlice({
  name:"subjectsList",
  initialState:{loaded:false, data:[]},
  reducers:{
    setSubjectsList(state, actions){
      return {loaded:true, data:actions.payload};
    },
    addNewSubjectItem(state, actions){
      return {...state, data: state.data.concat(actions.payload)};
    },
    removeSubjectItem(state, actions){
      return {...state, data: state.data.filter((r)=>(r.id !== actions.payload))}
    }
  }
})

export default subjectsListSlice;