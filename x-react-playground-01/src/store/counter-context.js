import React from "react";

const CounterContext = React.createContext({
  count: 0,
  themes: {},
  changeTheme: () => {},
  changeCounter: () => {},
});

export default CounterContext;
