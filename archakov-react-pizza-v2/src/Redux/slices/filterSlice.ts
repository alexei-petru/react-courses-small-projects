import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type filterSliceState = {
  pizzaSearch: string;
  activeCategory: number;
  sort: {
    name: string;
    sortProperty:
      | "rating"
      | "-rating"
      | "price"
      | "-price"
      | "title"
      | "-title";
  };
  selectedPage: number;
};

const initialState: filterSliceState = {
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
    setCategoryId(state, action: PayloadAction<number>) {
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
      state.activeCategory = Number(action.payload.activeCategory);
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
