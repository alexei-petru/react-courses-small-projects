import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import pizzaReducer from "./slices/pizzaSlice";

const store = configureStore({
  reducer: { filterReducer, cartReducer, pizzaReducer },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
