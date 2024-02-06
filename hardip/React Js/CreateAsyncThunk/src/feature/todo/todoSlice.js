import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    value: 0,
    ProductStatedata: undefined,
    isLoading: false,
    isSuccess: false
}


export const dummiproductApi = createAsyncThunk("product/dummiproductApi", async (payload, thunkAPI) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://dummyjson.com/products',
        });
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.status);
    }
});


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 2;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
        }

    },
    extraReducers: (builder) => {
        builder

            .addCase(dummiproductApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(dummiproductApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.ProductStatedata = action.payload;
            })
            .addCase(dummiproductApi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.ProductStatedata = action.payload;
            })
    },
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer
