import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    value: 0,
    Products: undefined,
    Cart: [],
    GetAllCartData: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const getproductapi = createAsyncThunk("api/products", async (payload, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/api/products');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getalladdtocartapi = createAsyncThunk("api/allcartdata", async (payload, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/api/allcartdata');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const addtocartapi = createAsyncThunk("api/addtocart", async (payload, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/api/addtocart', payload);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const deleteFromCartApi = createAsyncThunk("api/deleteFromCart", async (itemId, thunkAPI) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/deleteFromCart/${itemId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const ProoductSlice = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        removeItemFromCart: (state, action) => {
            state.Cart = state.Cart.filter(item => item.id !== action.payload);
        },
        updateCartQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.Cart.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getproductapi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getproductapi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.Products = action.payload;
            })
            .addCase(getproductapi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.Products = action.payload;
            })

            .addCase(addtocartapi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addtocartapi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.Cart.push(action.payload);
            })
            .addCase(addtocartapi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.Cart = action.payload;
            })

            .addCase(getalladdtocartapi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getalladdtocartapi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.GetAllCartData = action.payload;
            })
            .addCase(getalladdtocartapi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.GetAllCartData = action.payload;
            })

            .addCase(deleteFromCartApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteFromCartApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.Cart = state.Cart.filter(item => item.id !== action.payload);
            })
            .addCase(deleteFromCartApi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.Cart = action.payload; 
            });
    },
});

export const { removeItemFromCart, updateCartQuantity } = ProoductSlice.actions;
export default ProoductSlice.reducer;
