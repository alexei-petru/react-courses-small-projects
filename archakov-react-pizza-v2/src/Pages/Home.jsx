import qs from "qs";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";
import { setCategoryId, setSort } from "../Redux/slices/filterSlice";
import { fetchPizza, setSelectedPage } from "../Redux/slices/pizzaSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const searchedValue = useSelector((state) => state.filterReducer.pizzaSearch);
  const dispatch = useDispatch();
  const { data, status, itemsPerPage, selectedPage } = useSelector(
    (state) => state.pizzaReducer
  );

  const { activeCategory, sort } = useSelector((state) => state.filterReducer);
  const changeCategoryHandler = (category) => {
    dispatch(setCategoryId(category));
  };

  const changeSortHandler = (sortObj) => {
    dispatch(setSort(sortObj));
  };

  const setSelectedPageHandler = (page) => {
    dispatch(setSelectedPage(page));
  };

  useEffect(() => {
    const url = window.location.search;
    if (url) {
      const urlObj = qs.parse(url.substring(1));
      console.log("urlObj", urlObj);
      
    }
  }, []);

  const category = activeCategory ? `category=${activeCategory}` : "";
  const sortBy = sort.sortProperty.replace("-", "");
  const order = sort.sortProperty.includes("-") ? "desc" : "asc";
  const search = searchedValue ? `&search=${searchedValue}` : "";
  const page = `&page=${selectedPage}&limit=${itemsPerPage}`;

  const getPizza = useCallback(async () => {
    dispatch(fetchPizza({ category, sortBy, order, search, page }));
  }, [category, sortBy, order, search, page]);

  useEffect(() => {
    getPizza();
  }, [activeCategory, sort, searchedValue, selectedPage, getPizza]);

  useEffect(() => {
    const string = qs.stringify({ category, sortBy, order, search, page });
    navigate(`?${string}`);
    console.log({ category, sortBy, order, search, page });
  }, [category, sortBy, order, search, page]);

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onChangeCategory={changeCategoryHandler}
        />
        <Sort sort={sort} onChangeSort={changeSortHandler} />
      </div>
      <h2 className="content__title">Bce пиццы</h2>
      <div className="content__items">
        {status === "pending" &&
          [...Array(6)].map((_, index) => <Skeleton key={index} />)}
        {status === "succeeded" && data.items.length !== 0 ? (
          data.items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        ) : (
          <h3>No pizza has been found</h3>
        )}
      </div>
      <Pagination onPageChange={setSelectedPageHandler} />
    </>
  );
};

export default Home;
