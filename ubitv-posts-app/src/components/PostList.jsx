import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import classes from "./PostList.module.css";
import "./PostListTransitionGroup.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, ...props }) => {
  const [isNoPosts, setIsNoPost] = useState(false);

  const noPostsTitle = (
    <div>
      <h1 className={classes.noPosts}>No added Posts</h1>
    </div>
  );

  useEffect(() => {
    if (!posts.length) {
      setIsNoPost(true);
    } else {
      setIsNoPost(false);
    }
  }, [posts]);

  return (
    <div>
      {isNoPosts ? (
        noPostsTitle
      ) : (
        <h1 className={classes.title}>{props.title}</h1>
      )}
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
