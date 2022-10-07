import { createSlice} from "@reduxjs/toolkit";

var user = JSON.parse(window.localStorage.getItem('jobTrackaUser')) || '';

const capitalizeFirstLetter= (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
let User = ""
if (user){
    User = capitalizeFirstLetter(user.username)
}

const initialState = {
    username: User,
    token: user.token || '',
    isLoading: true,
    showSidebar: true,
    showMobileSidebar:false,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logOut : (state) => {
            window.localStorage.clear();
            state.username = "";
            state.token ="";
        },
        userIn: (state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        showSide: (state, {payload}) => {
            state.showSidebar = payload
        },
        showNavbar: (state,{payload}) => {
            state.showMobileSidebar = payload
        }
    }
})


export const {logOut, userIn, showSide, showNavbar} = userSlice.actions

export default userSlice.reducer;