import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk<Data, Record<string, string>>(
  "pizzaSlice/fetchPizzas",
  async (params: Record<string, string>) => {
    const { activeCategory, sort, order, pizzaSearch, selectedPage } = params;

    const { data } = await axios.get<Data>(
      `https://629de0ce3dda090f3c0dda82.mockapi.io/pizzas?${activeCategory}&sortBy=${sort}&order=${order}${pizzaSearch}${selectedPage}`
    );
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

enum Status {
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

interface PizzaSliceState {
  data: Data;
  pageCount: number;
  status: Status;
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
  status: Status.PENDING,
  itemsPerPage: 4,
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchPizza.pending, (state) => {
        state.status = Status.PENDING;
        state.data = {
          count: 0,
          items: itemsInitialState,
        };
      }),
      builder.addCase(fetchPizza.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.data = action.payload;
        state.pageCount = Math.ceil(state.data.count / state.itemsPerPage);
      }),
      builder.addCase(fetchPizza.rejected, (state) => {
        state.status = Status.FAILED;
        state.data = {
          count: 0,
          items: itemsInitialState,
        };
      })
    );
  },
});

export default pizzaSlice.reducer;
