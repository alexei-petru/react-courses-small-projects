import React from "react";
import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import ButtonDefault from "../UI/ButtonDefault";
import Card from "../UI/Card";

const ExpensesItem = (props) => {
  return (
    <Card className="expenses-item">
      <ExpensesDate date={props.date} />
      <div className="expenses-item__title">{props.title}</div>
      <div className="expenses-item__price">${props.price}</div>
      <ButtonDefault>Change Title</ButtonDefault>
    </Card>
  );
};

export default ExpensesItem;
