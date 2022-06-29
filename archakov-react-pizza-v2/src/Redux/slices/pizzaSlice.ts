import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
  "pizzaSlice/fetchPizzas",
  async (params: Record<string, string>) => {
    const { category, sortBy, order, search, page } = params;
    const { data } = await axios.get<Data>(
      `https://629de0ce3dda090f3c0dda82.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}${page}`
    );
    return data;
  }
);

export type PizzaItem = {
  category: number;
  id: string;
  imageUrl: string;
  price: number;
  rating: number[];
  sizes: number[];
  title: string;
  types: number[];
};

export type Data = [count?: number, items?: PizzaItem[]];

interface PizzaSliceState {
  data: Data;
  pageCount: number;
  status: "pending" | "succeeded" | "failed";
  itemsPerPage: number;
}

const initialState: PizzaSliceState = {
  data: [],
  pageCount: 1,
  status: "pending",
  itemsPerPage: 4,
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state, action) => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.status = "pending";
      state.data = [];
    }),
      builder.addCase(fetchPizza.fulfilled, (state, action) => {
        // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
        state.status = "succeeded";
        state.data = action.payload;
        state.pageCount = Math.ceil(state.data.count / state.itemsPerPage);
      }),
      builder.addCase(fetchPizza.rejected, (state, action) => {
        // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
        state.status = "failed";
        state.data = [];
      });
  },
});

export default pizzaSlice.reducer;
