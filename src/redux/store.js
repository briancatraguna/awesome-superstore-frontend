import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: {
        auth: {
            accessToken: localStorage.getItem("accessToken"),
            customerId: localStorage.getItem("customerId")
        }
    }
});

store.subscribe(() => {
    const { accessToken, customerId } = store.getState().auth;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("customerId", customerId);
});

export default store;