import React from "react";
import "./ButtonDefault.css";

const ButtonDefault = ({ type = "button", ...props }) => {
  return (
    <button
      className={"button-default " + props.className}
      type={type}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonDefault;
