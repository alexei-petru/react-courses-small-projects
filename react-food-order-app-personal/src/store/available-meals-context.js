import React from "react";

const AvailableMealsContext = React.createContext({
  items: [],
  addItem: () => {},
});

export default AvailableMealsContext;
