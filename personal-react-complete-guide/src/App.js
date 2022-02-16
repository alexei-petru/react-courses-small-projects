import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_DATA = [
  {
    id: Math.random(),
    date: new Date(2020, 5, 12),
    title: "Toilet Paper",
    price: 94.2,
  },
  {
    id: Math.random(),
    date: new Date(2020, 7, 12),
    title: "Toilet Paper",
    price: 200,
  },
  {
    id: Math.random(),
    date: new Date(2021, 1, 15),
    title: "New Tv",
    price: 500,
  },
  {
    id: Math.random(),
    date: new Date(2022, 0, 20),
    title: "Car",
    price: 5000,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (newExpenseData) => {
    console.log(newExpenseData);
    setExpenses((prevExpenses) => [newExpenseData, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onFormSaveData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

//make available all in the first place and filter by the year using state mby
