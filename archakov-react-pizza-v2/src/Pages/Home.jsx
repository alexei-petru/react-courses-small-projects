import { useCallback, useContext, useEffect, useState } from "react";
import { SearchContext } from "../App";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = () => {
  const { searchedValue } = useContext(SearchContext);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const [activeCategory, setActiveCategory] = useState(false);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [pageCount, setPageCount] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const itemsPerPage = 4;

  const category = activeCategory ? `category=${activeCategory}` : "";
  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "desc" : "asc";
  const search = searchedValue ? `&search=${searchedValue}` : "";
  const page = `&page=${selectedPage}&limit=${itemsPerPage}`;

  const fetchPizzas = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://629de0ce3dda090f3c0dda82.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}${page}`
    );
    const data = await response.json();
    setPizzas(data.items);
    setPageCount(Math.ceil(data.count / itemsPerPage));
    setIsLoading(false);
  }, [category, sortBy, order, search, page]);

  useEffect(() => {
    fetchPizzas();
  }, [activeCategory, sortType, searchedValue, selectedPage, fetchPizzas]);

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onChangeCategory={(category) => setActiveCategory(category)}
        />
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
      <Pagination onPageChange={setSelectedPage} pageCount={pageCount} />
    </>
  );
};

export default Home;
