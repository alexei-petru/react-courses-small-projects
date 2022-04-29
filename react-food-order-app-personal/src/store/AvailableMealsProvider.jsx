import React, { useReducer } from "react";
import AvailableMealsContext from "./available-meals-context";

const availableMealsReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = [action.item].concat([...state.items]);
    return { items: updatedItems };
  }
  if (action.type === "EDIT") {
    const existingMealItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems = [...state.items];

    const oldItemData = `${updatedItems[existingMealItemIndex].name}${updatedItems[existingMealItemIndex].price}`;
    const newItemData = `${action.item.name}${action.item.price}`;

    let newItem;
    oldItemData === newItemData
      ? (newItem = action.item)
      : (newItem = { ...action.item, id: action.item.currentId });

    updatedItems[existingMealItemIndex] = newItem;
    return { items: updatedItems };
  }
};

const AvailableMealsProvider = (props) => {
  const defaultState = {
    items: [
      {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
      },
      {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
      },
      {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
      },
    ],
  };

  const [availableMealsState, dispatchEvent] = useReducer(
    availableMealsReducer,
    defaultState
  );

  const addItemHandler = (item) => {
    dispatchEvent({ type: "ADD", item: item });
  };

  const editItemHandler = (item) => {
    dispatchEvent({ type: "EDIT", item: item });
  };

  const availableMealsContext = {
    items: availableMealsState.items,
    addItem: addItemHandler,
    editItem: editItemHandler,
  };

  return (
    <AvailableMealsContext.Provider value={availableMealsContext}>
      {props.children}
    </AvailableMealsContext.Provider>
  );
};
export default AvailableMealsProvider;
