import React from "react";

const AvailableMealsContext = React.createContext({
  items: [],
  addItem: () => {},
  editItem: () => {},
});

export default AvailableMealsContext;
