import React, { useState } from "react";
import PostItem from "./PostItem";
import classes from "./PostList.module.css";
import "./PostListTransitionGroup.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, ...props }) => {
  const [noPostTimer, setNoPostTimer] = useState(false);

  if (!posts.length) {
    return <h1 className={classes.noPosts}>No added Posts</h1>;

    // <div>
    //   <CSSTransition in={noPostTimer} timeout={500} classNames="post">
    //   </CSSTransition>
    //   </div>
  }

  return (
    <div>
      <h1 className={classes.title}>{props.title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames={"post"}>
            <PostItem
              onRemovePost={props.onRemovePost}
              number={index + 1}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
