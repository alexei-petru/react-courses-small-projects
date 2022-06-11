import React from "react";
import classes from "./Search.module.css";
import ReactPaginate from "react-paginate";

const Search = ({ searchedValue, setSearchedValue }) => {
  return (
    <div className={classes["search-wrapper"]}>
      <input
        className={classes["search-input"]}
        value={searchedValue}
        onChange={(event) => setSearchedValue(event.target.value)}
        placeholder="Search pizza"
        type="text"
      />
    </div>
  );
};

export default Search;
