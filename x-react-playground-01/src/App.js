import React from "react";
import Counter from "./components/Counter";
import classes from "./App.module.css";
import CounterProvider from "./store/CounterProvider";
import ReevAndRerendering from "./components/ReevAndRerendering";
import ClassToggleUsersList from "./components/ClassBasedComponents/ClassToggleUsersList";

const App = () => {
  return (
    <div className={classes.container}>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <ReevAndRerendering />
      <ClassToggleUsersList />
    </div>
  );
};

export default App;
