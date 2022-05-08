import React from "react";
import MyParagraph from "../UI/MyParagraph";
import MyButton from "../UI/MyButton";
import cl from "./MemoReevaluation.module.css";

const MemoReevaluation = () => {
  console.log("reexecuted MemoReevaluation");
  return (
    <div className={cl.MemoReev}>
      <MyParagraph>a reev paragraph</MyParagraph>
      <MyButton> change reev paragraph</MyButton>
    </div>
  );
};

export default React.memo(MemoReevaluation);
