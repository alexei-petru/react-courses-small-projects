import React from "react";

const MyParagraph = ({ children }) => {
  console.log("reexecuted MyParagraph");

  return <p>{children}</p>;
};

export default MyParagraph;
