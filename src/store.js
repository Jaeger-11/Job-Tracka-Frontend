import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/userSlice";
import applicationsReducer from "./Features/applicationSlice";

export const store = configureStore({
    reducer: {
        user : userReducer,
        applications: applicationsReducer,
    },
})