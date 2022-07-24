import React from "react";
import classes from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={classes.pagination}>
      <div>
        <button>prev</button>
        <button>next</button>
      </div>
    </div>
  );
};

export default Pagination;
