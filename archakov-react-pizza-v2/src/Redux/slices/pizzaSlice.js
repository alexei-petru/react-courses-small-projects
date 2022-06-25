import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
  "pizzaSlice/fetchPizzas",
  async (params) => {
    const { category, sortBy, order, search, page } = params;
    const { data } = await axios.get(
      `https://629de0ce3dda090f3c0dda82.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}${page}`
    );
    return data;
  }
);

const initialState = {
  data: [],
  pageCount: 1,
  status: "pending",
  itemsPerPage: 4,
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPizza.pending]: (state, action) => {
      state.status = "pending";
      state.data = [];
    },
    [fetchPizza.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      state.pageCount = Math.ceil(state.data.count / state.itemsPerPage);
    },
    [fetchPizza.rejected]: (state, action) => {
      state.status = "failed";
      state.data = [];
    },
  },
});

export default pizzaSlice.reducer;
