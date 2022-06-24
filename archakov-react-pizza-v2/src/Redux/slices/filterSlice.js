import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaSearch: "",
  activeCategory: 0,
  sort: {
    name: "популярности (ASC)",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCategoryId(state, actions) {
      state.activeCategory = actions.payload;
    },
    setPizzaSearch(state, action) {
      state.pizzaSearch = action.payload;
    },
    setSort(state, actions) {
      state.sort = actions.payload;
    },
    setParams(state, action) {
      state.pizzaSearch = action.payload.search;
      console.log("payload", action.payload);
      state.activeCategory = action.payload.category;
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategoryId, setSort, setPizzaSearch, setParams } =
  filterSlice.actions;

export default filterSlice.reducer;
