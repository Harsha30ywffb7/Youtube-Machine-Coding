
import appSlice from './appSlice'

import {configureStore} from '@reduxjs/toolkit'
const appStore = configureStore({
    reducer:{
        app : appSlice, 
    }
})

export default appStore