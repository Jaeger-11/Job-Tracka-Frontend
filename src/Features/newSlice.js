import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../Hooks/useAxios";

const initialState = {
    position: "",
    company: "",
    location: "",
    status: "",
    jobType: "",
    notes: "",
    isLoading: false,
    newData: {}
}

export const addApplication = createAsyncThunk(
    'application/addApplication',
    async ( _, thunkAPI) => {
        // console.log(values)
        const { newData} = thunkAPI.getState().application
        const data = JSON.stringify(newData,null,2)
        try {
            const resp = await useAxios.post('/application', data)
            console.log(resp.data)
        } catch (error) {
            return error
        }
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
    },
    extraReducers:{
        [addApplication.fulfilled]:(state) => {
            state.isLoading = false;
        },
        [addApplication.pending]:(state) => {
            state.isLoading = true;
        },
        [addApplication.rejected]:(state) => {
            state.isLoading = false;
        }
    }
})


export const {clearState, handleInput, setNewData} = applicationSlice.actions
export default applicationSlice.reducer