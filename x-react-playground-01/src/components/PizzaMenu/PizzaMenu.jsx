import React, { useEffect, useRef, useState } from "react";
import classes from "./PizzaMenu.module.css";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  where,
  query,
  orderBy,
  limit,
  startAt,
  startAfter,
} from "firebase/firestore";
import { localPizzaArray } from "../../assets/pizzas/localPizzaArray";
import { useAddRemoveFirebase } from "../../helpers/useAddRemoveFirebase";
import PizzaList from "./PizzaList";
import Pagination from "./Pagination";

const pizzaCollection = collection(db, "pizzas-menu");
const filterList = [
  {
    name: "All pizzas",
    key: null,
    comparation: null,
    value: null,
  },
  {
    name: "Chicken",
    key: "keywords",
    comparation: "array-contains-any",
    value: ["chicken"],
  },
  {
    name: "Price > 9e",
    key: "price",
    comparation: ">",
    value: 9,
  },
  {
    name: "Price > 30e",
    key: "price",
    comparation: ">",
    value: 30,
  },
];
const sortList = ["title", "price", "rating"];

const PizzaMenu = () => {
  const [pizzasArray, setPizzasArray] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    key: null,
    comparation: null,
    value: null,
  });
  const [sortOptions, setSortOptions] = useState({
    name: "title",
    order: "asc",
  });
  const [isLoading, setIsLoading] = useState(true);
  const limitPageItems = 4;
  // const [lastItemState, setLastItemState] = useState(0);
  const lastItemRef = useRef();
  const firstItemRef = useRef();

  useEffect(() => {
    const getQuerrySnapshot = async () => {
      setIsLoading(true);
      const queryConditionOrCollection =
        filterOptions.key !== null
          ? query(
              pizzaCollection,
              where(
                filterOptions.key,
                filterOptions.comparation,
                filterOptions.value
              ),
              orderBy(
                filterOptions.key === "keywords" ? "title" : filterOptions.key
              ),
              limit(limitPageItems)
            )
          : query(
              pizzaCollection,
              orderBy("title"),
              // startAfter(),
              limit(limitPageItems)
            );

      const documentSnapshot = await getDocs(queryConditionOrCollection);
      const lastItemSnapshot =
        documentSnapshot.docs[documentSnapshot.docs.length - 1];
      const firstItemSnapshot = documentSnapshot.docs[0];
      lastItemRef.current = lastItemSnapshot;
      firstItemRef.current = firstItemSnapshot;
      console.log("lastItem", lastItemRef.current.data());
      console.log("firstItem", firstItemRef.current.data());

      const responseData = documentSnapshot.docs.map((item) => item.data());
      setIsLoading(false);
      setPizzasArray(responseData);
    };
    getQuerrySnapshot();
  }, [filterOptions]);

  const changeFilterHandler = (option) => {
    const filterObj = filterList.find((filterObj) => filterObj.name === option);
    filterObj && setFilterOptions(filterObj);
  };
  return (
    <div className={`${classes["pizza-menu-wrapper"]} container`}>
      <div className={classes.sort}>
        <p>Sort by</p>
        <select name="sort" id="sort-list">
          {sortList.map((name) => (
            <option key={name} value="name">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </option>
          ))}
        </select>
        <label htmlFor="asc">Asc</label>
        <input id="asc" name="asc-desc" value={"ASC"} type={"radio"} />
        <label htmlFor="desc">Desc</label>
        <input id="desc" name="asc-desc" value={"DESC"} type={"radio"} />
        {/* <select
          onChange={(event) => changeFilterHandler(event.target.value)}
          name="filter"
          id="sort-list"
        >
          {filterList.map((filterObj) => {
            return (
              <option key={filterObj.name} value={filterObj.name}>
                {filterObj.name}
              </option>
            );
          })}
        </select> */}
        <p
          style={{
            marginLeft: "30px",
          }}
        >
          Filter by
        </p>
        <select
          onChange={(event) => changeFilterHandler(event.target.value)}
          name="filter"
          id="sort-list"
        >
          {filterList.map((filterObj) => {
            return (
              <option key={filterObj.name} value={filterObj.name}>
                {filterObj.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {isLoading && <p>...Loading</p>}
        {pizzasArray.length !== 0 && !isLoading && (
          <PizzaList pizzasArray={pizzasArray} />
        )}
        {pizzasArray.length !== 0 && !isLoading && <Pagination />}
        {!isLoading && !pizzasArray.length && <p>No pizzas has been found</p>}
      </div>
    </div>
  );
};
export default PizzaMenu;
