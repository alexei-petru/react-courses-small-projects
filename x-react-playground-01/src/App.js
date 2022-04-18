import React from "react";
import Counter from "./components/Counter";
import classes from "./App.module.css";
import CounterProvider from "./store/CounterProvider";

const App = () => {
  return (
    <div className={classes.container}>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default App;
