import React from "react";
import classes from "./Button.module.css";

const Button = ({ ...props }, type = "button") => {
  return (
    <button
      className={`${classes.button} ${props.className || ""}`}
      type={type}
    >
      {props.children}
    </button>
  );
};

export default Button;
