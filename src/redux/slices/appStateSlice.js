import { createSlice } from '@reduxjs/toolkit'
import LoginService from "../../common/services/LoginService";

const initialState = {
    value: LoginService.NOT_LOGGED_IN,
}

export const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        login: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = LoginService.LOGGED_IN
        },
        logout: (state) => {
            state.value = LoginService.NOT_LOGGED_IN
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = appStateSlice.actions

export default appStateSlice.reducer
