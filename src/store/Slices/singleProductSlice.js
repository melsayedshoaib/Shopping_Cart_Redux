import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getSingleProduct = createAsyncThunk(
  "singleProduct/getSingleProduct",
  async (id, thunkAPI) => {
    const { RejectedWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return data;
    } catch (error) {
      return RejectedWithValue(error);
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProduct: {},
    isLoading: false,
    error: "",
  },
  extraReducers: {
    [getSingleProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.error = "";
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleProduct = action.payload;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default singleProductSlice.reducer;
