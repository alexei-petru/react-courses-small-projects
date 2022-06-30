import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
  "pizzaSlice/fetchPizzas",
  async (params: Record<string, string>) => {
    console.log("params", params);
    const { activeCategory, sort, order, pizzaSearch, selectedPage } = params;
    const { data } = await axios.get<Data>(
      `https://629de0ce3dda090f3c0dda82.mockapi.io/pizzas?${activeCategory}&sortBy=${sort}&order=${order}${pizzaSearch}${selectedPage}`
    );
    console.log("data", data);
    return data;
  }
);

export type PizzaItem = {
  category: string;
  id: string;
  imageUrl: string;
  price: number;
  rating: number[];
  sizes: number[];
  title: string;
  types: number[];
};

export type Data = { count: number; items: PizzaItem[] };

interface PizzaSliceState {
  data: Data;
  pageCount: number;
  status: "pending" | "succeeded" | "failed";
  itemsPerPage: number;
}

const itemsInitialState = [
  {
    category: "",
    id: "",
    imageUrl: "",
    price: 0,
    rating: [],
    sizes: [],
    title: "",
    types: [],
  },
];

const initialState: PizzaSliceState = {
  data: {
    count: 0,
    items: itemsInitialState,
  },
  pageCount: 1,
  status: "pending",
  itemsPerPage: 4,
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchPizza.pending, (state) => {
        state.status = "pending";
        state.data = {
          count: 0,
          items: itemsInitialState,
        };
      }),
      builder.addCase(fetchPizza.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.pageCount = Math.ceil(state.data.count / state.itemsPerPage);
      }),
      builder.addCase(fetchPizza.rejected, (state) => {
        state.status = "failed";
        state.data = {
          count: 0,
          items: itemsInitialState,
        };
      })
    );
  },
});

export default pizzaSlice.reducer;
