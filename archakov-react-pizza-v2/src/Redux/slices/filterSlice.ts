import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortItemType = {
  name: string;
  sortProperty: "rating" | "-rating" | "price" | "-price" | "title" | "-title";
};

type filterSliceState = {
  pizzaSearch?: string;
  activeCategory?: string;
  sort: SortItemType;
  selectedPage?: number;
};

const initialState: filterSliceState = {
  pizzaSearch: "",
  activeCategory: "",
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
    setCategoryId(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setPizzaSearch(state, action: PayloadAction<string>) {
      state.pizzaSearch = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<filterSliceState>) {
      if (action.payload.pizzaSearch !== "") {
        state.pizzaSearch = action.payload.pizzaSearch;
      }
      state.activeCategory = action.payload.activeCategory;
      state.sort = action.payload.sort;
      state.selectedPage = Number(action.payload.selectedPage);
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
