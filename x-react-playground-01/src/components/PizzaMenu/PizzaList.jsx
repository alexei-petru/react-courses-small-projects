import React from "react";

const PizzaList = ({ pizzasArray }) => {
  return (
    <div className="pizzas-wrapper">
      {pizzasArray.map((itemObj, i) => (
        <p key={itemObj.id}>{`${i + 1}-${itemObj.title}; Price:${
          itemObj.price
        }; Rating:${itemObj.rating}; `}</p>
      ))}
    </div>
  );
};

export default PizzaList;
