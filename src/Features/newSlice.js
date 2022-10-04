import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../Hooks/useAxios";

const initialState = {
    fetchStatus: '',
    newData: {},
    application: [],
}

export const getApplication = createAsyncThunk(
    'application/getApplication',
    async(id,thunkAPI) => {
        const resp = await useAxios.get(`/application/${id}`)
        return resp.data
    }
)

export const addApplication = createAsyncThunk(
    'application/addApplication',
    async ( _, thunkAPI) => {
        const { newData} = thunkAPI.getState().application
        const data = JSON.stringify(newData,null,2)
        const resp = await useAxios.post('/application', data);
    }
) 

export const editApplication = createAsyncThunk(
    'application/editApplication',
    async(_, thunkAPI) => {
        const { newData } = thunkAPI.getState().application
        const data = JSON.stringify(newData,null,2)
        const resp = await useAxios.patch('/application', data)
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
        clearApplication: (state) => {
            state.application = []
        }
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
        [getApplication.fulfilled]: (state, {payload}) => {
            state.application = payload.application;
        },
        [editApplication.fulfilled]:(state) => {
            state.newData = {};
            state.fetchStatus = "success";
            state.application = [];
        },
        [editApplication.pending]:(state) => {
            state.fetchStatus = "loading";
        },
        [editApplication.rejected]:(state) => {
            state.fetchStatus = "failed";
            state.newData = {};
            state.application = [];
        },
    }
})


export const {clearState, handleInput, setNewData, statusNull, clearApplication} = applicationSlice.actions
export default applicationSlice.reducer