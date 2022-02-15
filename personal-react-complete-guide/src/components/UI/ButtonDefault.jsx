import React from "react";
import "./ButtonDefault.css";

const ButtonDefault = (props) => {
  return (
    <button className={"button-default " + props.className} type="submit">
      {props.children}
    </button>
  );
};

export default ButtonDefault;
