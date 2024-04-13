import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants";
const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    }, 
    reducers:{
        addChat:(state, action)=>{
            state.messages.unshift(action.payload);
            state.messages.splice(LIVE_CHAT_COUNT,10);
        },
       
    }
})

export const {addChat , removeChat} = chatSlice.actions;

export default chatSlice.reducer