import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [curTitle, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle("New Title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{curTitle}</h2>
        <Card className="expense-item__price">${props.amount}</Card>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
