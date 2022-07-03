import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { getDataFromLS } from "../../utils/getDataFromLS";

const findItemByType = (stateItems: CartItem[], payload: CartItem) => {
  return stateItems.find(
    (itemObj) =>
      itemObj.id === payload.id &&
      itemObj.typeName === payload.typeName &&
      itemObj.size === payload.size
  );
};

const calculateItemsCount = (items: CartItem[]) => {
  return items.reduce((acc, obj) => acc + obj.pizzaCountUniqueType, 0);
};

const calculateTotalSum = (items: CartItem[]) => {
  return items.reduce(
    (acc, obj) => acc + obj.price * obj.pizzaCountUniqueType,
    0
  );
};

type CartItem = {
  id: string;
  price: number;
  title: string;
  imageUrl: string;
  pizzaCountUniqueType: number;
  size: number;
  typeName: string;
};

interface CartSliceState {
  totalItemsCount: number;
  totalSum: number;
  items: CartItem[];
  countPerPizzaBlock: { [key: string]: number };
}

const LSEmpty: CartSliceState = {
  totalItemsCount: 0,
  totalSum: 0,
  items: [],
  countPerPizzaBlock: {},
};
const LSCart: CartSliceState = getDataFromLS("cart", LSEmpty);

const initialState: CartSliceState = {
  totalItemsCount: LSCart.totalItemsCount,
  totalSum: LSCart.totalSum,
  items: LSCart.items,
  countPerPizzaBlock: LSCart.countPerPizzaBlock,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem(state: CartSliceState, action: PayloadAction<CartItem>) {
      const foundItemByType = findItemByType(state.items, action.payload);

      let count = state.countPerPizzaBlock[action.payload.id];
      if (count == null) {
        count = 0;
      }
      state.countPerPizzaBlock[action.payload.id] = count + 1;

      if (foundItemByType) {
        foundItemByType.pizzaCountUniqueType++;
      }

      if (!foundItemByType) {
        state.items.push(action.payload);
      }
      state.totalItemsCount = calculateItemsCount(state.items);
      state.totalSum = calculateTotalSum(state.items);
    },
    decreaseCartItem(state, action: PayloadAction<CartItem>) {
      const foundItemByType = findItemByType(state.items, action.payload);

      if (!foundItemByType || foundItemByType.pizzaCountUniqueType === 1) {
        return;
      }

      foundItemByType.pizzaCountUniqueType--;
      state.countPerPizzaBlock[action.payload.id]--;

      state.totalItemsCount = calculateItemsCount(state.items);
      state.totalSum = calculateTotalSum(state.items);
    },
    removeCartItem(state, action: PayloadAction<CartItem>) {
      delete state.countPerPizzaBlock[action.payload.id];
    },
    clearCart(state) {
      if (window.confirm("All cart items will be delete. Are you sure?")) {
        state.totalItemsCount = 0;
        state.totalSum = 0;
        state.items = [];
        state.countPerPizzaBlock = {};
      }
    },
  },
});

export const { addCartItem, decreaseCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
