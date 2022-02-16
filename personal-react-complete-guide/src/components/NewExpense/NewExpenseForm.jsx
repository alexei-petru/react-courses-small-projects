import React, { useState } from "react";
import "./NewExpenseForm.css";
import ButtonDefault from "../UI/ButtonDefault";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle.trim() === "" ||
      enteredAmount.trim() === "" ||
      enteredDate.trim() === ""
    )
      return;

    const formValues = {
      title: enteredTitle,
      price: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveExpenseData(formValues);
  };

  const cancelPressHandler = () => {
    props.onCancelPress();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__control">
          <ButtonDefault
            onClick={cancelPressHandler}
            style={{ marginRight: "1rem" }}
          >
            Cancel
          </ButtonDefault>
          <ButtonDefault type={"submit"}>Add Expense</ButtonDefault>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
