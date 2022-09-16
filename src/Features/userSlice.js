import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var user = JSON.parse(window.localStorage.getItem('jobTrackaUser')) || '';

function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

const initialState = {
    username: capitalizeFirstLetter(user.username) || '',
    token: `Bearer ${user.token}` || '',
    // isLoading: true,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logOut : (state) => {
            state.username = "";
            state.token ="";
        },
        userIn: (state, action) => {
            // console.log(action.payload);
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
    }
})

// axios.defaults.headers.post['authorization'] = userSlice.reducer

console.log(userSlice.reducer)

export const {logOut, userIn} = userSlice.actions

export default userSlice.reducer;