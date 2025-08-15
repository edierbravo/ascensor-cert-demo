import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialLogin,
    reducers: {
        onLogin: (state, action) => {
            state.isAuth = true;
        },
        onLogout: (state) => {
            state.isAuth = false;
        },
        onStartLogin: (state) => {
            state.isLoginLoading = true;
        }
    }
})

export const {
    onLogin,
    onLogout,
    onStartLogin,
} = AuthSlice.actions;