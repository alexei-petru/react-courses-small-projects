import React from "react";
import MyParagraph from "../UI/MyParagraph";
import MyButton from "../UI/MyButton";
import cl from "./MemoReevaluation.module.css";

const MemoReevaluation = () => {
  return (
    <div className={cl.MemoReev}>
      <MyParagraph>a reev paragraph</MyParagraph>
      <MyButton disabled> change reev paragraph</MyButton>
    </div>
  );
};

export default React.memo(MemoReevaluation);
