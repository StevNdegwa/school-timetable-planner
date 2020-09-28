import {createSlice} from "@reduxjs/toolkit";

const schedulesListSlice = createSlice({
  name:"schedulesList",
  initialState:{loaded:false, data:{monday:[], tuesday:[], wednesday:[], thursday:[], friday:[]}},
  reducers:{
    setScheduleLists:{
      reducer(state, actions){
        return {loaded:true, data:actions.payload};
      },
      prepare(data){
        let payload = {monday:[], tuesday:[], wednesday:[], thursday:[], friday:[]};
        
        data.forEach((item)=>{
          payload[item.day].push(item);
        })
        
        return {payload};
      }
    },
    addNewSchedule(state, actions){
      let {day, schedule} = actions.payload;
      
      state.data[day] = state.data[day].concat(schedule);
      
      return state;
    },
    removeSchedule(state, actions){
      let {day, id} = actions.payload;
      
      state.data[day] = state.data[day].filter((s)=>(s.id !== id));
      
      return state;
    }
  }
})

export default schedulesListSlice;