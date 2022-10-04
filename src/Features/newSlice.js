import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../Hooks/useAxios";

const initialState = {
    fetchStatus: '',
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

export const deleteApplication = createAsyncThunk(
    'application/deleteApplication',
    async (id, thunkAPI) => {
        const resp = await useAxios.delete(`/application/${id}`);
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
            state.fetchStatus = ""
        },
    },
    extraReducers:{
        [addApplication.fulfilled]:(state) => {
            state.newData = {};
            state.fetchStatus = "success"
        },
        [addApplication.pending]:(state) => {
            state.fetchStatus = "loading";
        },
        [addApplication.rejected]:(state) => {
            state.fetchStatus = "failed";
            state.newData = {}
        },
        [deleteApplication.fulfilled]:(state) => {
            state.fetchStatus = "success"
        },
        [deleteApplication.pending]:(state) => {
            state.fetchStatus = "loading"
        },
        [deleteApplication.rejected]:(state) => {
            state.fetchStatus = "failed"
        },
    }
})


export const {clearState, handleInput, setNewData, statusNull} = applicationSlice.actions
export default applicationSlice.reducer