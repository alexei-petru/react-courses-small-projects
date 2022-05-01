import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={classes.select}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
