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
  },
});

export const { setCategoryId, setSort, setPizzaSearch } = filterSlice.actions;

export default filterSlice.reducer;
