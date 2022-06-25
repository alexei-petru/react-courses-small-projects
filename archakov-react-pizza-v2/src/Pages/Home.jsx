import qs from "qs";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort, { sortList } from "../components/Sort";
import {
  setCategoryId,
  setFilters,
  setSelectedPage,
  setSort,
} from "../Redux/slices/filterSlice";
import { fetchPizza } from "../Redux/slices/pizzaSlice";

const Home = () => {
  const isFirstRenderDone = useRef(false);
  const navigate = useNavigate();
  const { pizzaSearch: searchedValue, selectedPage } = useSelector(
    (state) => state.filterReducer
  );
  const dispatch = useDispatch();
  const { data, status, itemsPerPage } = useSelector(
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

  const urlCategory = activeCategory ? `category=${activeCategory}` : 0;
  const urlSortBy = sort.sortProperty.replace("-", "");
  const urlOrder = sort.sortProperty.includes("-") ? "desc" : "asc";
  const UrlSearch = searchedValue ? `&search=${searchedValue}` : "";
  const UrlPage = `&page=${selectedPage}&limit=${itemsPerPage}`;

  //insert url link when props will change
  useEffect(() => {
    console.log("first render");
    if (isFirstRenderDone.current) {
      console.log("inside render");
      const string = qs.stringify({
        activeCategory,
        sortBy: sort.sortProperty,
        order: urlOrder,
        search: searchedValue,
        page: selectedPage,
      });
      navigate(`?${string}`);
    }
  }, [
    sort.sortProperty,
    activeCategory,
    urlOrder,
    searchedValue,
    selectedPage,
  ]);

  //get pizza with props from redux
  const getPizza = useCallback(async () => {
    dispatch(
      fetchPizza({
        category: urlCategory,
        sortBy: urlSortBy,
        order: urlOrder,
        search: UrlSearch,
        page: UrlPage,
      })
    );
  }, [urlCategory, urlSortBy, urlOrder, UrlSearch, UrlPage]);

  //fetch pizza when value from redux will change but not on first time
  useEffect(() => {
    // console.log("isParseUrlDone.current", isParseUrlDone.current);
    if (isFirstRenderDone.current) {
      // console.log("123");
      getPizza();
    }
  }, [activeCategory, sort, searchedValue, selectedPage, getPizza]);

  //*only first time parsing from url change redux and then mark as parsed
  useEffect(() => {
    const url = window.location.search;
    if (url) {
      console.log("url has been found");
      const urlObj = qs.parse(url.substring(1));
      const sortObj = sortList.find(
        (obj) => obj.sortProperty === urlObj.sortBy
      );
      console.log("urlObj", urlObj);
      dispatch(
        setFilters({
          ...urlObj,
          sort: sortObj,
        })
      );
    } else {
      getPizza();
    }
    isFirstRenderDone.current = true;
  }, []);

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
