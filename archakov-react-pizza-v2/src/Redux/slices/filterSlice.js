import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaSearch: "",
  activeCategory: 0,
  sort: {
    name: "популярности (ASC)",
    sortProperty: "rating",
  },
  selectedPage: 1,
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
    setFilters(state, action) {
      if (action.payload.search !== "") {
        state.pizzaSearch = action.payload.search;
      }
      state.activeCategory = Number(action.payload.activeCategory);
      state.sort = action.payload.sort;
      state.selectedPage = Number(action.payload.page);
    },
    setSelectedPage(state, action) {
      state.selectedPage = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setPizzaSearch,
  setFilters,
  setSelectedPage,
} = filterSlice.actions;

export default filterSlice.reducer;
