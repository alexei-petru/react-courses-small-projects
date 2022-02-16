import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select onChange={selectHandler} defaultValue={props.selected}>
          <option value="All">All</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
