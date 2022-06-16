import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem(state, actions) {
      state.items.push(actions.payload);
    },
  },
});

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
