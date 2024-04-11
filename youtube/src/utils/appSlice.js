import {createSlice} from '@reduxjs/toolkit'

const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        isMenuOpen : true
    },
    reducers:{
        toggleMenu :(state, action)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        removeMenu :(state)=>{
            state.isMenuOpen =false;
        }
    },
})

export const {toggleMenu, removeMenu} = appSlice.actions

export default appSlice.reducer