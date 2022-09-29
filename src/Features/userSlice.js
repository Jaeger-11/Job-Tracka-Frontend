import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

var user = JSON.parse(window.localStorage.getItem('jobTrackaUser')) || '';

function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
let User = ""
if (user){
    User = capitalizeFirstLetter(user)
}

const initialState = {
    username: User,
    token: `Bearer ${user.token}` || '',
    isLoading: true,
    showSidebar: true,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logOut : (state) => {
            state.username = "";
            state.token ="";
            window.localStorage.removeItem('jobTrackaUser')
        },
        userIn: (state, action) => {
            // console.log(action.payload);
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        showSide: (state, {payload}) => {
            state.showSidebar = payload
        }
    }
})


export const {logOut, userIn, showSide} = userSlice.actions

export default userSlice.reducer;