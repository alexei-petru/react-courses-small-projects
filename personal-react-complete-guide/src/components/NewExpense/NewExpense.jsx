import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const formSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onFormSaveData(expenseData);
  };

  return (
    <Card className="new-expense">
      <NewExpenseForm onSaveExpenseData={formSaveHandler} />
    </Card>
  );
};

export default NewExpense;
