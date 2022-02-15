import React from "react";
import "./ExpensesDate.css";
import Card from "../UI/Card";

const ExpensesDate = (props) => {
  const month = props.date.toLocaleString("ro-Ro", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className="expenses-item__date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </Card>
  );
};

export default ExpensesDate;
