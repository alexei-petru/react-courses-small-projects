import React from "react";
import classes from "./Button.module.css";

const Button = ({ type = "button", ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${props.className || ""}`}
      type={type}
    >
      {props.children}
    </button>
  );
};

export default Button;
