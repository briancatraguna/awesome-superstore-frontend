import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
        customerId: null
    },
    reducers: {
        setAccessTokenState(state, action) {
            state.accessToken = action.payload;
        },
        setCustomerIdState(state, action) {
            state.customerId = action.payload;
        },
        clearAuthState(state) {
            localStorage.clear();
            state.accessToken = null;
            state.customerId = null;
        }
    }
});

export const {
    setAccessTokenState,
    clearAuthState,
    setCustomerIdState
} = authSlice.actions;
export default authSlice.reducer;