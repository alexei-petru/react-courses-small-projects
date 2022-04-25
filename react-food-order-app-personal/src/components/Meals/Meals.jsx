import React from "react";
import AvailableMealsProvider from "../../store/AvailableMealsProvider";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMealsProvider>
        <AvailableMeals />
      </AvailableMealsProvider>
    </>
  );
};

export default Meals;
