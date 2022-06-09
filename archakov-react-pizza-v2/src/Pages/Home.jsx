import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const fetchPizzas = async () => {
    const response = await fetch(
      "https://629de0ce3dda090f3c0dda82.mockapi.io/pizzas"
    );
    const data = await response.json();
    setPizzas(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort
          sortType={sortType}
          onChangeSort={(sortObj) => setSortType(sortObj)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  );
};

export default Home;
