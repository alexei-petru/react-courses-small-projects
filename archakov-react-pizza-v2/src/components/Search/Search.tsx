import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setPizzaSearch } from "../../Redux/slices/filterSlice";
import classes from "./Search.module.css";

const Search: React.FC = () => {
  const [searchedLocalValue, setSearchedLocalValue] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const clearInputHandler = () => {
    setSearchedLocalValue("");
    dispatch(setPizzaSearch(""));
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setPizzaSearch(searchedLocalValue));
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
