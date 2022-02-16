import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEdiding] = useState(false);

  const formSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdiding(false);
  };

  const startEditingHandler = () => {
    setIsEdiding(true);
  };

  const stopEditingHandler = () => {
    setIsEdiding(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <div className="new-expense__add-button-wrapper ">
          <button onClick={startEditingHandler}>Add New Expense</button>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={formSaveHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
