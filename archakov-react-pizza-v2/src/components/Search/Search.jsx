import React, { useContext, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { SearchContext } from "../../App";
import classes from "./Search.module.css";

const Search = () => {
  const [searchedLocalValue, setSearchedLocalValue] = useState("");

  const { setSearchedValue } = useContext(SearchContext);
  const inputRef = useRef();

  const clearInputHandler = () => {
    setSearchedValue("");
    inputRef.current.focus();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchedValue(searchedLocalValue);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchedLocalValue]);

  return (
    <div className={classes["search-wrapper"]}>
      <input
        className={classes["search-input"]}
        ref={inputRef}
        value={searchedLocalValue}
        onChange={(event) => setSearchedLocalValue(event.target.value)}
        placeholder="Search pizza"
        type="text"
      />
      <div onClick={clearInputHandler} className={classes["clear-input"]}>
        x
      </div>
    </div>
  );
};

export default Search;
