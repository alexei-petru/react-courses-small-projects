import qs from "qs";
import { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
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
  SortItemType,
} from "../Redux/slices/filterSlice";
import { fetchPizza } from "../Redux/slices/pizzaSlice";
import { RootState, useAppDispatch } from "../Redux/store";

export type UrlObj = {
  order?: string;
  page?: string;
  search?: string;
  category?: string;
  sortBy?: string;
  sort?: SortItemType;
};

const Home: React.FC = () => {
  const isFirstRenderDone = useRef(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    pizzaSearch: searchedValue,
    selectedPage,
    activeCategory,
    sort,
  } = useSelector((state: RootState) => state.filterReducer);
  const { data, status, itemsPerPage } = useSelector(
    (state: RootState) => state.pizzaReducer
  );

  // useEffect(() => {
  //   if (isFirstRenderDone.current) {
  //     const dataString = JSON.stringify(data);
  //     localStorage.setItem("data", dataString);
  //     console.log(localStorage);
  //   }
  // }, [data]);

  const changeCategoryHandler = useCallback((category: string) => {
    dispatch(setCategoryId(category));
  }, []);

  const changeSortHandler = (sortObj: {
    name: string;
    sortProperty: string;
  }) => {
    dispatch(setSort(sortObj));
  };

  const setSelectedPageHandler = (page: number) => {
    dispatch(setSelectedPage(page));
  };

  const urlCategory =
    activeCategory && activeCategory != "0" ? `category=${activeCategory}` : "";
  const urlSortBy = sort.sortProperty.replace("-", "");
  const urlOrder = sort.sortProperty.includes("-") ? "desc" : "asc";
  const UrlSearch = searchedValue ? `&search=${searchedValue}` : "";
  const UrlPage = `&page=${selectedPage}&limit=${itemsPerPage}`;

  //stringify url link when props will change
  useEffect(() => {
    if (isFirstRenderDone.current) {
      const string = qs.stringify({
        category: activeCategory,
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
        activeCategory: urlCategory,
        sort: urlSortBy,
        order: urlOrder,
        pizzaSearch: UrlSearch,
        selectedPage: UrlPage,
      })
    );
  }, [urlCategory, urlSortBy, urlOrder, UrlSearch, UrlPage]);

  //fetch pizza when value from redux will change but not on first time
  useEffect(() => {
    if (isFirstRenderDone.current) {
      getPizza();
    }
  }, [activeCategory, sort, searchedValue, selectedPage, getPizza]);

  //*only first time parsing from url change redux and then mark as parsed
  useEffect(() => {
    const url = window.location.search;
    if (url) {
      const urlObj: UrlObj = qs.parse(url.substring(1));
      const sortObj = sortList.find(
        (obj) => obj.sortProperty === urlObj.sortBy
      );
      if (sortObj) {
        dispatch(
          setFilters({
            ...urlObj,
            sort: sortObj,
          })
        );
      }
    } else {
      getPizza();
    }
    isFirstRenderDone.current = true;
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory || "0"}
          onChangeCategory={changeCategoryHandler}
        />
        <Sort sort={sort} onChangeSort={changeSortHandler} />
      </div>
      <h2 className="content__title">All pizzas</h2>
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
