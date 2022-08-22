import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    covid: {},
    error: '',
}

// generate all pending,fufilled and rejected action type

export const fetchCovids = createAsyncThunk('user/fetchCovids', () => {
    return axios
        .get('https://covidnigeria.herokuapp.com/api')
        .then((response) => response.data)
})

const covidSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchCovids.pending, (state, action) => {
            // Add user to the state array
            state.loading = true;
        })
        builder.addCase(fetchCovids.fulfilled, (state, action) => {
            // Add user to the state array
            state.loading = true;

            state.covid = action.payload;
            state.error = '';
        })
        builder.addCase(fetchCovids.rejected, (state, action) => {
            // Add user to the state array
            state.loading = false;
            state.covid = {};
            state.error = action.error.message;
        })
    },
})

export default covidSlice.reducer;