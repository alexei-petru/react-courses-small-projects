import React from "react";
import "../../index.css";

const Card = ({ children, reverse }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "white",
        color: reverse ? "#fff" : "black",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: true,
};

export default Card;
