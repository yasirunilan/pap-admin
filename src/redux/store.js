import { configureStore } from '@reduxjs/toolkit'
import appStateReducer from './slices/appStateSlice'
import drawerStateReducer from './slices/drawerStateSlice'

export const store = configureStore({
    reducer: {
        appState: appStateReducer,
        drawerState: drawerStateReducer
    },
})
