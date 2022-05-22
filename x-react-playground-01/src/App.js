import React from "react";
import Counter from "./components/Counter";
import classes from "./App.module.css";
import CounterProvider from "./store/CounterProvider";
import ReevAndRerendering from "./components/ReevAndRerendering";
import ClassBasedUsersFinder from "./components/ClassBasedComponents/ClassBasedUsersFinder";
import HttpRequests from "./components/HttpRequests/HttpRequests";
import DateProvider from "./store/date/DateProvider";

const App = () => {
  return (
    <div className={classes.container}>
      <DateProvider>
        <HttpRequests />
      </DateProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <ReevAndRerendering />
      <ClassBasedUsersFinder />
    </div>
  );
};

export default App;
