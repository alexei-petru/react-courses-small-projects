import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: Math.random(),
      date: new Date(2020, 5, 12),
      title: "Toilet Paper",
      price: 94.2,
    },
    {
      id: Math.random(),
      date: new Date(2021, 1, 15),
      title: "New Tv",
      price: 500,
    },
    {
      id: Math.random(),
      date: new Date(2022, 1, 20),
      title: "Car",
      price: 5000,
    },
  ];

  const addExpenseHandler = (newExpenseData) => {
    console.log(newExpenseData);
  };

  return (
    <div>
      <NewExpense onFormSaveData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
