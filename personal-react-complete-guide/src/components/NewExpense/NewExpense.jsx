import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import Card from "../UI/Card";
import ButtonDefault from "../UI/ButtonDefault";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const formSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onFormSaveData(expenseData);
    setIsEditing(false);
  };

  return (
    <Card className="new-expense">
      {isEditing ? (
        <NewExpenseForm
          onCancelPress={stopEditingHandler}
          onSaveExpenseData={formSaveHandler}
        />
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <ButtonDefault
            onClick={startEditingHandler}
            className="new-expense__show-inputs-btn"
            style={{
              backgroundColor: "rgb(50, 70, 160)",
              color: "white",
              padding: "0.8rem",
            }}
          >
            Add New Expenses
          </ButtonDefault>
        </div>
      )}
    </Card>
  );
};

export default NewExpense;
