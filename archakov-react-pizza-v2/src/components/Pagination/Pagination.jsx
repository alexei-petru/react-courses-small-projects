import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import classes from "./Pagination.module.css";

const Pagination = ({ onPageChange }) => {
  const pageCount = useSelector((state) => state.filterReducer.pageCount);

  const handlePageClick = (event) => {
    onPageChange(event.selected + 1);
  };

  return (
    <ReactPaginate
      className={classes["pagination-wrapper"]}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
