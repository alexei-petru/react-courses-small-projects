import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: { filterReducer, cartReducer },
});
