import React from "react";
import Chart from "./Chart";

const ExpensesChart = (props) => {
  const chartData = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    chartData[expense.date.getMonth()].value += expense.price;
  }

  const allExpensePrices = chartData.map((expense) => expense.value);
  const maximumValue = Math.max(...allExpensePrices);

  return (
    <Chart chartData={chartData} maxValue={maximumValue} />
  );
};

export default ExpensesChart;
