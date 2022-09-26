import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../Hooks/useAxios";

const initialState = {
    // position: "",
    // company: "",
    // location: "",
    // status: "",
    // jobType: "",
    // notes: "",
    status: '',
    newData: {},
}

export const addApplication = createAsyncThunk(
    'application/addApplication',
    async ( _, thunkAPI) => {
        const { newData} = thunkAPI.getState().application
        const data = JSON.stringify(newData,null,2)
        const resp = await useAxios.post('/application', data);
    }
) 

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers:{
        clearState: (state) => initialState,
        handleInput: (state, {payload}) => {
            state[payload.name] = payload.value
        },
        setNewData: (state, {payload}) => {
            state.newData = payload;
        },
        statusNull: (state) => {
            state.status = ""
        }
    },
    extraReducers:{
        [addApplication.fulfilled]:(state) => {
            state.newData = {};
            state.status = "success"
        },
        [addApplication.pending]:(state) => {
            state.status = "loading";
        },
        [addApplication.rejected]:(state) => {
            state.status = "failed";
            state.newData = {}
        }
    }
})


export const {clearState, handleInput, setNewData, statusNull} = applicationSlice.actions
export default applicationSlice.reducer