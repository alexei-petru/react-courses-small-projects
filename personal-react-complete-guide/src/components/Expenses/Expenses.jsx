import React, { useState } from "react";
import "./Expenses.css";
import ExpensesItem from "./ExpensesItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFiler";

const Expenses = ({ items, ...props }) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={selectedYear}
      />
      <ExpensesItem
        title={items[0].title}
        date={items[0].date}
        price={items[0].price}
      />
      <ExpensesItem
        title={items[1].title}
        date={items[1].date}
        price={items[1].price}
      />{" "}
      <ExpensesItem
        title={items[2].title}
        date={items[2].date}
        price={items[2].price}
      />
    </Card>
  );
};

export default Expenses;
