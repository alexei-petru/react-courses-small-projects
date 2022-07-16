import React from "react";
import UsersArray from "./components/UsersArray";
import Counter from "./components/Counter";
import classes from "./App.module.css";
import CounterProvider from "./store/CounterProvider";
import ReevAndRerendering from "./components/ReevAndRerendering";
import ClassBasedUsersFinder from "./components/ClassBasedComponents/ClassBasedUsersFinder";
import HttpRequests from "./components/HttpRequests/HttpRequests";
import DateProvider from "./store/date/DateProvider";
import PizzaMenu from "./components/PizzaMenu/PizzaMenu";

export type userType = {
  firstName: string;
  lastName: string;
};

const App = () => {
  return (
    <div className={classes.container}>
      <PizzaMenu />
      {/* <UsersArray/>
      <DateProvider>
        <HttpRequests />
      </DateProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <ReevAndRerendering />
      <ClassBasedUsersFinder /> */}
    </div>
  );
};

export default App;
