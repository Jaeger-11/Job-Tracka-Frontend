import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../Hooks/useAxios";

const filterState = {
    search: '',
    status: 'all',
    jobType: 'all',
    sort: 'latest',
    searchBy: 'searchByPosition'
}

const initialState = {
    totalApplications: 0,
    totalPages: 1,
    page: 1,
    applications: [],
    isLoading: false,
    ...filterState,
}

export const getAllApplications = createAsyncThunk(
    'applications/getAllApplications',
    async (_, thunkAPI ) => {
        const { search, status, jobType, sort, searchBy, page } = thunkAPI.getState().applications
        let url = `/application?status=${status}&jobType=${jobType}&page=${page}&sort=${sort}`
        if(search){
            url = url + `&${searchBy}=${search}`;
        }
        try {
            const resp = await useAxios.get(url)
            return resp.data
        } catch (error) {
            console.log(error)
        }
    }
)

const applicationsSlice = createSlice({
    name: 'applications',
    initialState,
    reducers:{
        handleInput: (state, {payload}) => {
            state[payload.name] = payload.value
        },
        clearFilters: (state) => initialState,
    },
    extraReducers:{
        [getAllApplications.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.applications = payload.applications
            state.totalPages = payload.numOfPages
            state.totalApplications = payload.totalApplications
        },
        [getAllApplications.pending]: (state, { payload }) => {
            state.isLoading = true
        },
        [getAllApplications.rejected]: (state, { payload }) => {
            state.isLoading = false
        },
    }
})


export const { handleInput, clearFilters } = applicationsSlice.actions

export default applicationsSlice.reducer;