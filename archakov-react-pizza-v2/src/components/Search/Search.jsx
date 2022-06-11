import React, { useContext } from "react";
import { SearchContext } from "../../App";
import classes from "./Search.module.css";

const Search = () => {
  const { searchedValue, setSearchedValue } = useContext(SearchContext);
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
