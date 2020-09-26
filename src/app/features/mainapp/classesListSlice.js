import {createSlice} from "@reduxjs/toolkit";

const classesListSlice = createSlice({
  name:"classesList",
  initialState:{loaded:false, data:[]},
  reducers:{
    setClassesList(state, actions){
      return {loaded:true, data:actions.payload};
    },
    addNewClassItem(state, actions){
      return {...state, data: state.data.concat(actions.payload)};
    },
    removeClassItem(state, actions){
      return {...state, data: state.data.filter((r)=>(r.id !== actions.payload))}
    }
  }
})

export default classesListSlice;