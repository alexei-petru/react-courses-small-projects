import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PizzaPage = () => {
  const [pizza, setPizza] = useState();
  const { id: paramsId } = useParams();
  console.log(paramsId);

  useEffect(() => {
    const fetchPizza = async () => {
      const { data } = await axios.get(
        `https://629de0ce3dda090f3c0dda82.mockapi.io/pizzas/${paramsId}`
      );
      setPizza(data);
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{pizza.title}</h1>
      <img className="pizza-block__image" src={pizza.imageUrl} alt="" />
      <p>
        <b>Price</b>:{pizza.price} rub
      </p>
    </div>
  );
};

export default PizzaPage;
