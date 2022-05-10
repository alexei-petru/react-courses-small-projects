/* 

Reducer with Context

*/

import React, { useContext } from "react";
import classes from "./Counter.module.css";
import CounterContext from "../store/counter-context";

const Counter = () => {
  const ctx = useContext(CounterContext);

  return (
    <>
      <div
        style={{
          backgroundColor:
            ctx.themes[`${ctx.themes.currentTheme}`].backgroundColor,
          color: ctx.themes[`${ctx.themes.currentTheme}`].color,
        }}
        className={classes["counter-wrapper"]}
      >
        <div className={classes.counter}>
          <h1>{ctx.count}</h1>
          <button onClick={() => ctx.changeCounter("decrement")}>
            Decrement
          </button>
          <button onClick={() => ctx.changeCounter("increment")}>
            Increment
          </button>
          <button
            style={{
              backgroundColor:
                ctx.themes[`${ctx.themes.currentTheme}`].buttonBackground,
              color: ctx.themes[`${ctx.themes.currentTheme}`].color,
            }}
            onClick={() => ctx.changeTheme()}
          >
            Change Background
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;

/* 

useState simple

*/

// import React, { useState } from "react";
// import classes from "./Counter.module.css";

// const Counter = () => {

//   const countData = 0;

//   const themes = {
//     themeLight: {
//       name: "light",
//       backgroundColor: "gray",
//       color: "black",
//       buttonBackground: "yellow",
//     },

//     themeDark: {
//       name: "dark",
//       backgroundColor: "black",
//       color: "white",
//       buttonBackground: "blue",
//     },
//   };

//   const [count, setCount] = useState(countData);
//   const [theme, setTheme] = useState(themes.themeLight);

//   const incrementHandler = () => {
//     setCount((prev) => prev + 1);
//   };

//   const decrementHandler = () => {
//     setCount((prev) => prev - 1);
//   };

//   const changeColorHandler = () => {
//     setTheme((prevObj) =>
//       prevObj.name === "light" ? themes.themeDark : themes.themeLight
//     );
//   };
//   return (
//     <>
//       <div
//         style={{ backgroundColor: theme.backgroundColor }}
//         className={classes["counter-wrapper"]}
//       >
//         <div className={classes.counter}>
//           <h1 style={{ color: theme.color }}>{count}</h1>
//           <button onClick={decrementHandler}>Decrement</button>
//           <button onClick={incrementHandler}>Increment</button>
//           <button
//             style={{
//               backgroundColor: theme.buttonBackground,
//               color: theme.color,
//             }}
//             onClick={changeColorHandler}
//           >
//             Change Color
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Counter;

/* 



useReducer



*/
// import React, { useReducer } from "react";
// import classes from "./Counter.module.css";

// const reducer = (state, action) => {
//   if (action.type === "decrement") {
//     return { ...state, count: state.count - 1 };
//   }

//   if (action.type === "increment") {
//     return { ...state, count: state.count + 1 };
//   }

//   if (action.type === "changeTheme") {
//     const nextTheme =
//       state.currentTheme === "themeLight" ? "themeDark" : "themeLight";
//     return { ...state, currentTheme: nextTheme };
//   }
// };

// const Counter = () => {
//   const initialState = {
//     count: 0,
//     currentTheme: "themeLight",
//     themeLight: {
//       name: "light",
//       backgroundColor: "gray",
//       color: "black",
//       buttonBackground: "yellow",
//     },

//     themeDark: {
//       name: "dark",
//       backgroundColor: "black",
//       color: "white",
//       buttonBackground: "blue",
//     },
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: state[`${state.currentTheme}`].backgroundColor,
//           color: state[`${state.currentTheme}`].color,
//         }}
//         className={classes["counter-wrapper"]}
//       >
//         <div className={classes.counter}>
//           <h1>{state.count}</h1>
//           <button onClick={() => dispatch({ type: "decrement" })}>
//             Decrement
//           </button>
//           <button onClick={() => dispatch({ type: "increment" })}>
//             Increment
//           </button>
//           <button
//             style={{
//               backgroundColor: state[`${state.currentTheme}`].buttonBackground,
//               color: state[`${state.currentTheme}`].color,
//             }}
//             onClick={() => dispatch({ type: "changeTheme" })}
//           >
//             Change Background
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Counter;
