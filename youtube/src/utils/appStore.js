
import appSlice from './appSlice'
import {configureStore} from '@reduxjs/toolkit'
import searchSlice from './searchSlice'

const appStore = configureStore({
    reducer:{
        app : appSlice,
        search: searchSlice,
    }
})

export default appStore