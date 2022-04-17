import React, { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  // const state = { count: 0, color: "blue", background: "red" };

  const countData = 0;
  const colorData = "gray";

  const [count, setCount] = useState(countData);
  const [color, setColor] = useState(colorData);

  //   const data = {
  //     counter: 0,
  //     themeLight: {
  //       backgroundColor: "white",
  //       color: "black",
  //       buttonBackground: "red",
  //     },
  //     themeDark: {
  //       backgroundColor: "black",
  //       color: "white",
  //       buttonBackground: "blue",
  //     },
  //   };

  //   const [dataObj, setDataObj] = useState(data);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  const changeColorHandler = () => {
    setColor((prev) => (prev === "gray" ? "blue" : "gray"));
  };
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className={classes["counter-wrapper"]}
      >
        <div className={classes.counter}>
          <h1>{count}</h1>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={changeColorHandler}>Change Color</button>
        </div>
      </div>
    </>
  );
};
export default Counter;
