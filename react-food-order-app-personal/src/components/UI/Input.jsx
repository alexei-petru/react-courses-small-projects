import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div className={`${classes.input} ${props.className || ""}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {props.children}
      <input ref={ref} {...props.input} onChange={props.onChange} />
    </div>
  );
});

export default Input;
