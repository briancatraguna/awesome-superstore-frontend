import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
    },
    reducers: {
        setAccessTokenState(state, action) {
            state.accessToken = action.payload;
        },
        clearAuthState(state) {
            localStorage.clear();
            state.accessToken = null;
        }
    }
});

export const {
    setAccessTokenState,
    clearAuthState,
} = authSlice.actions;
export default authSlice.reducer;