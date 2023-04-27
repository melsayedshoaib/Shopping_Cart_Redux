import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { RejectedWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    } catch (error) {
      return RejectedWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: "",
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = "";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
