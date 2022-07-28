import React from "react";
import classes from "./PizzaList.module.css";

const PizzaList = ({ pizzasArray }) => {
  return (
    <div className={classes["pizzas-wrapper"]}>
      {pizzasArray.map((itemObj, i) => (
        <div key={itemObj.id} className={classes["pizza-wrapper"]}>
          <p>{`${i + 1}-${itemObj.title};`}</p>
          <img src={itemObj.imageUrl} alt={itemObj.title} />
          <p> {`Price:${itemObj.price}; Rating:${itemObj.rating};`}</p>
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
