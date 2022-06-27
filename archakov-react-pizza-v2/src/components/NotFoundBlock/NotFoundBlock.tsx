import React from "react";
import emptyCard from "../../assets/empty-cart.png";

const NotFoundBlock = () => {
  return (
    <>
      <img src={emptyCard} alt="not found img" />
      <h1>oops, We dont have this page on our Website</h1>
    </>
  );
};

export default NotFoundBlock;
