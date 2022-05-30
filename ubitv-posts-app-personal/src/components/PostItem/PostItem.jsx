import React from "react";
import classes from "./PostItem.module.css";
import MyButton from "../UI/MyButton/MyButton";

const PostItem = (props) => {
  return (
    <div className={classes["post-item__wrapper"]}>
      <div className={classes["post-item__content"]}>
        <h2>
          {`${props.number}. 
          ${props.post.title}`}
        </h2>
        <p>{props.post.body}</p>
      </div>
      <div className={classes["post-item__btns"]}>
        <MyButton onClick={() => props.onRemovePost(props.post)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
