import React from "react";
import doneImg from "../../../assets/doneImg.png";
import classes from "./DoneImg.module.css";

const DoneImg = ({ doneMessage }) => {
  return (
    <div className={classes["img-wrapper"]}>
      {doneMessage && <p>{doneMessage}</p>}
      <img
        //   className={`${classes["done-image"]} ${
        //     isSubmitDone ? classes["done-image-show"] : ""
        //   }`}
        className={classes["done-img"]}
        src={doneImg}
        alt="done"
      />
    </div>
  );
};

export default DoneImg;
