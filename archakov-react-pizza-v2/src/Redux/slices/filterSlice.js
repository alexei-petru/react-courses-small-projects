import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  pageCount: 0,
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
      state.categoryId = actions.payload;
    },
    setSort(state, actions) {
      state.sort = actions.payload;
    },
    setPageCount(state, actions) {
      state.pageCount = actions.payload;
    },
  },
});

export const { setCategoryId, setSort, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
