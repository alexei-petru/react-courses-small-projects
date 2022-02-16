import React, { useState } from "react";
import "./Expenses.css";
import ExpensesItem from "./ExpensesItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFiler";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
const Expenses = ({ items, ...props }) => {
  const [selectedYear, setSelectedYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  let filteredYear;
  selectedYear === "All"
    ? (filteredYear = items)
    : (filteredYear = items.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
      ));

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={selectedYear}
      />
      <ExpensesChart expenses={filteredYear} />
      {filteredYear.map((expense) => (
        <ExpensesItem
          yearData={filteredYear}
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </Card>
  );
};

export default Expenses;
