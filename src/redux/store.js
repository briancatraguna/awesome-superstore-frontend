import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: {
        auth: {
            accessToken: localStorage.getItem("accessToken"),
        }
    }
});

store.subscribe(() => {
    const { accessToken } = store.getState().auth;
    localStorage.setItem("accessToken", accessToken);
});

export default store;