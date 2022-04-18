import React, { useReducer } from "react";
import CounterContext from "./counter-context";

const reducer = (state, action) => {
  if (action.type === "decrement") {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === "increment") {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === "changeTheme") {
    const nextTheme =
      state.themes.currentTheme === "themeLight" ? "themeDark" : "themeLight";
    return { ...state, themes: { ...state.themes, currentTheme: nextTheme } };
  }
};

const CounterProvider = ({ children }) => {
  const initialState = {
    count: 0,
    themes: {
      currentTheme: "themeLight",
      themeLight: {
        name: "light",
        backgroundColor: "gray",
        color: "black",
        buttonBackground: "yellow",
      },

      themeDark: {
        name: "dark",
        backgroundColor: "black",
        color: "white",
        buttonBackground: "blue",
      },
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const changeThemeHandler = () => {
    dispatch({ type: "changeTheme" });
  };

  const changeCounterHandler = (type) => {
    type === "increment" ? dispatch({ type: type }) : dispatch({ type: type });
  };

  const cartContext = {
    count: state.count,
    themes: state.themes,
    changeTheme: changeThemeHandler,
    changeCounter: changeCounterHandler,
  };

  return (
    <CounterContext.Provider value={cartContext}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
