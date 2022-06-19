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
    addCartItem(state, action) {
      const findedItemId = state.items.find(
        (itemObj) => itemObj.id === action.payload.id
      );
      const findedItemType = state.items.find(
        (itemObj) =>
          findedItemId &&
          itemObj.typeName === action.payload.typeName &&
          itemObj.size === action.payload.size
      );

      if (findedItemType) {
        findedItemType.countPerType++;
      }
      if (findedItemId) {
        findedItemId.countPerId++;
      }
      if (!findedItemId || !findedItemType) {
        state.items.push(action.payload);
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
    decreaseCartItem(state, action) {
      const findedItem = state.items.find(
        (itemObj) =>
          itemObj.id === action.payload.id &&
          itemObj.typeName === action.payload.typeName &&
          itemObj.size === action.payload.size
      );
      if (findedItem.countPerType !== 1) {
        findedItem.countPerType--;
      }
    },
    removeCartItem(state, action) {
      
    },
    clearCart(state) {
      if (window.confirm("All cart items will be delete. Are you sure?")) {
        state.totalItemsCount = 0;
        state.totalSum = 0;
        state.items = [];
      }
    },
  },
});

export const { addCartItem, decreaseCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
