import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UrlObj } from "../../Pages/Home";

export type SortItemType = {
  name: string;
  sortProperty: "rating" | "-rating" | "price" | "-price" | "title" | "-title";
};

type filterSliceState = {
  pizzaSearch?: string;
  activeCategory?: string;
  sort: SortItemType;
  selectedPage: number;
};

const initialState: filterSliceState = {
  pizzaSearch: "",
  activeCategory: "0",
  sort: {
    name: "Popularity (ASC)",
    sortProperty: "rating",
  },
  selectedPage: 1,
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
      state.selectedPage = 1;
    },
    setPizzaSearch(state, action: PayloadAction<string>) {
      state.pizzaSearch = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<UrlObj>) {
      if (action.payload.search !== "") {
        state.pizzaSearch = action.payload.search;
      }
      if (action.payload.sort) {
        state.sort = action.payload.sort;
      }
      state.activeCategory = action.payload.category;

      if (action.payload.page) {
        state.selectedPage = Number(action.payload.page);
      }
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
