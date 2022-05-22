import React from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ input, label, className }) => {
  return (
    <div className={[classes.inputWrapper, className].join(" ")}>
      <label
        className={[classes.label, label.className].join(" ")}
        htmlFor={input.id}
      >
        {label.name}
      </label>
      <input
        {...input}
        className={[classes.input, input.className].join(" ")}
      />
    </div>
  );
};

export default MyInput;
