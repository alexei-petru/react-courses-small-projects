import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setSort(state, actions) {
      state.sort = actions.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
