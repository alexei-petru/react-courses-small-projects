import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import classes from "./Pagination.module.css";

type PaginationProps = {
  onPageChange: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const { pageCount } = useSelector((state: RootState) => state.pizzaReducer);

  const handlePageClick = (selectedObj: { selected: number }) => {
    onPageChange(selectedObj.selected + 1);
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
    />
  );
};

export default Pagination;
