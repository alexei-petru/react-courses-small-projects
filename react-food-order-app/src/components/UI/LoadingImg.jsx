import React from "react";
import loadingImg from "../../assets/loadingImg.gif";
import classes from "./LoadingImg.module.css";

const LoadingImg = (props) => {
  return (
    <img
      {...props}
      className={[classes.loadingImg, props.className].join(" ")}
      src={loadingImg}
      frameBorder="0"
      allowFullScreen
    ></img>
  );
};

export default LoadingImg;
