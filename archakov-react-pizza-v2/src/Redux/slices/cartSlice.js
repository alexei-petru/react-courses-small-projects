import { createSlice } from "@reduxjs/toolkit";

const isFindItemById = (stateItems, payloadId) => {
  return stateItems.find((itemObj) => itemObj.id === payloadId);
};

const isFindItemByType = (stateItems, payload) => {
  return stateItems.find(
    (itemObj) =>
      itemObj.id === payload.Id &&
      itemObj.typeName === payload.typeName &&
      itemObj.size === payload.size
  );
};

const initialState = {
  totalItemsCount: 0,
  totalSum: 0,
  items: [],
  countById: {},
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem(state, action) {
      // console.log("stateItems", state.items);
      // console.log("statePayload", action.payload);
      // const findedItemId = isFindItemById(state.items, action.payload.id);
      // const findedItemType = isFindItemByType(state.items, action.payload);
      const foundItemById = state.items.find(
        (itemObj) => itemObj.id === action.payload.id
      );

      const foundItemByType = state.items.find(
        (itemObj) =>
          foundItemById &&
          itemObj.typeName === action.payload.typeName &&
          itemObj.size === action.payload.size
      );

      if (foundItemByType) {
        foundItemByType.countPerType++;
      }
      if (foundItemById) {
        foundItemById.countPerId++;
      }
      if (!foundItemById || !foundItemByType) {
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
    removeCartItem(state, action) {},
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
