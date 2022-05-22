import React, { useState } from "react";
import MySelect from "../../../UI/MySelect/MySelect";
import classes from "./SortAsteroids.module.css";

const SortAsteroids = ({ sortedOption, onSortOptionChange }) => {
  return (
    <div className={classes["sort-asteroids-wrapper"]}>
      <MySelect
        onChange={(sorted) => onSortOptionChange(sorted)}
        label={{ name: "Sort Asteroids " }}
        select={{
          id: "sortAsteroids",
          value: sortedOption,
        }}
        options={[
          { value: "day", name: "by Day" },
          { value: "size-daily", name: "by Size Daily" },
          { value: "size-all", name: "by Size All" },
          { value: "danger-daily", name: "by Danger Daily" },
          { value: "danger-all", name: "by Danger All" },
        ]}
      />
    </div>
  );
};

export default SortAsteroids;
