import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalItemsCount: 0,
  totalSum: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem(state, actions) {
      const findedItemId = state.items.find(
        (itemObj) => itemObj.id === actions.payload.id
      );
      const findedItemType = state.items.find(
        (itemObj) =>
          findedItemId &&
          itemObj.typeName === actions.payload.typeName &&
          itemObj.size === actions.payload.size
      );

      if (findedItemType) {
        findedItemType.countPerType++;
      }
      if (findedItemId) {
        findedItemId.countPerId++;
      }
      if (!findedItemId || !findedItemType) {
        state.items.push(actions.payload);
      }

      state.totalItemsCount = state.items.reduce(
        (acc, obj) => acc + obj.countPerType,
        0
      );

      state.totalSum = state.items.reduce(
        (acc, obj) => acc + obj.price * obj.countPerType,
        0
      );
    },
  },
});

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
