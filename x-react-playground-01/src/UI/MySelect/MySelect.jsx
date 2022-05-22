import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, label, select, className, onChange }) => {
  return (
    <div className={[className, classes.mySelect].join(" ")}>
      {label && <label {...label}>{label.name}</label>}
      <select onChange={(event) => onChange(event.target.value)} {...select}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MySelect;
