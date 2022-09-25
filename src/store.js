import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/userSlice";
import applicationsReducer from "./Features/applicationSlice";
import applicationReducer from "./Features/newSlice";

export const store = configureStore({
    reducer: {
        user : userReducer,
        applications: applicationsReducer,
        application: applicationReducer
    },
})