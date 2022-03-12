import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [defaultState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: defaultState.items,
    totalAmount: defaultState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
