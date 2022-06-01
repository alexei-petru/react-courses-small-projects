import React from "react";
import MyButton from "../MyButton/MyButton";
import classes from "./Pagination.module.css";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className={classes["pages-numbers"]}>
      {pagesArray.map((nr) => {
        return (
          <MyButton
            onClick={() => changePage(nr)}
            className={page === nr ? "active" : " "}
            key={nr}
          >
            {nr}
          </MyButton>
        );
      })}
    </div>
  );
};

export default Pagination;
