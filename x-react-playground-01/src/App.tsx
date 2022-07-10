import React from "react";
import TestComponent from "./components/TestComponent";
// import Counter from "./components/Counter";
// import classes from "./App.module.css";
// import CounterProvider from "./store/CounterProvider";
// import ReevAndRerendering from "./components/ReevAndRerendering";
// import ClassBasedUsersFinder from "./components/ClassBasedComponents/ClassBasedUsersFinder";
// import HttpRequests from "./components/HttpRequests/HttpRequests";
// import DateProvider from "./store/date/DateProvider";

export type userType = {
  firstName: string;
  lastName: string;
};

const App = () => {
  const users: userType[] = [
    { firstName: "Ada", lastName: "Cardinal" },
    { firstName: "Ada", lastName: "Brown" },
  ];
  return (
    <TestComponent users={users} />
    // <div className={classes.container}>
    //   <DateProvider>
    //     <HttpRequests />
    //   </DateProvider>
    //   <CounterProvider>
    //     <Counter />
    //   </CounterProvider>
    //   <ReevAndRerendering />
    //   <ClassBasedUsersFinder />
    // </div>
  );
};

export default App;
