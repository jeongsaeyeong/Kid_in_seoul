import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        accessToken: '', 
        refreshToken: '', 
        roles: '',
        isLoading: false
    },
    reducers: {
        loginUser: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.roles = action.payload.roles;
            state.isLoading = true
        },

        clearUser: (state) => {
            state.accessToken = "";
            state.refreshToken = "";
            state.roles = "";
            state.isLoading = false
        },
    },
})


export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;