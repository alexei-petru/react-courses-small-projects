import React, { useReducer, useState } from "react";
import classes from "./Counter.module.css";

const initialState = { count: 0 };

const reducer = (state, action) => {
  if (action.type === "decr") {
    return { count: state.count - 1 };
  }
  if (action.type === "incr") {
    return { count: state.count + 1 };
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={classes.counter}>
      <h2 className={classes["counter-title"]}>Max 121</h2>
      <div className={classes["counter-number"]}>{state.count}</div>
      <div className={classes["buttons-wrapper"]}>
        <button onClick={() => dispatch({ type: "decr" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "incr" })}>Increment</button>
      </div>
    </div>
  );
}
//   //   const [counterNumber, setCounterNumber] = useState(0);

//   //   const incrementHandler = () => {
//   //     setCounterNumber((prevNumber) => ++prevNumber);
//   //   };
//   //   const decrementHandler = () => {
//   //     setCounterNumber((prevNumber) => --prevNumber);
//   //   };

//   return (
//     <div className={classes.counter}>
//       <h2 className={classes["counter-title"]}>Counter</h2>
//       <div className={classes["counter-number"]}>{counterNumber}</div>
//       <div className={classes["buttons-wrapper"]}>
//         <button onClick={decrementHandler}>Decrement</button>
//         <button onClick={incrementHandler}>Increment</button>
//       </div>
//     </div>
//   );
// }

export default Counter;