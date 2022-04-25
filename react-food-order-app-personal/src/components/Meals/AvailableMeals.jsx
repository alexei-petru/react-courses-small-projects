import React, { useContext } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import AddMeal from "./AddMeal/AddMeal";
import AvailableMealsContext from "../../store/available-meals-context";

const AvailableMeals = () => {
  const mealsCtx = useContext(AvailableMealsContext);

  const mealsList = mealsCtx.items.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <AddMeal />
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
