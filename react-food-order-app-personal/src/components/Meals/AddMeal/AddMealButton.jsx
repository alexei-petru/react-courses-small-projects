import React from "react";
import classes from "./AddMealButton.module.css";

const AddMealButton = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${props.className || ""} ${classes.button}`}
    >
      {props.children}
    </button>
  );
};

export default AddMealButton;
