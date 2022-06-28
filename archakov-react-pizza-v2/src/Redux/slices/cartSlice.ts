import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

const findItemByType = (stateItems: CartItem[], payload: any) => {
  return stateItems.find(
    (itemObj) =>
      itemObj.id === payload.id &&
      itemObj.typeName === payload.typeName &&
      itemObj.size === payload.size
  );
};

const calculateItemsCount = (items: CartItem[]) => {
  return items.reduce((acc, obj) => acc + obj.countPerType, 0);
};

const calculateTotalSum = (items: CartItem[]) => {
  return items.reduce((acc, obj) => acc + obj.price * obj.countPerType, 0);
};

type CartItem = {
  id: number;
  price: number;
  title: string;
  imageUrl: string;
  countPerType: number;
  size: number;
  typeName: string;
};

interface CartSliceState {
  totalItemsCount: number;
  totalSum: number;
  items: CartItem[];
  countById: any;
}

const initialState: CartSliceState = {
  totalItemsCount: 0,
  totalSum: 0,
  items: [],
  countById: {},
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem(state: CartSliceState, action) {
      const foundItemByType = findItemByType(state.items, action.payload);

      let count = state.countById[action.payload.id];
      if (count == null) {
        count = 0;
      }
      state.countById[action.payload.id] = count + 1;

      if (foundItemByType) {
        foundItemByType.countPerType++;
      }

      if (!foundItemByType) {
        state.items.push(action.payload);
      }
      state.totalItemsCount = calculateItemsCount(state.items);
      state.totalSum = calculateTotalSum(state.items);
    },
    decreaseCartItem(state, action) {
      const foundItemByType = findItemByType(state.items, action.payload);

      if (!foundItemByType || foundItemByType.countPerType === 1) {
        return;
      }

      foundItemByType.countPerType--;
      state.countById[action.payload.id]--;

      state.totalItemsCount = calculateItemsCount(state.items);
      state.totalSum = calculateTotalSum(state.items);
    },
    removeCartItem(state, action) {
      delete state.countById[action.payload.id];
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
