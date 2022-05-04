import React from "react";
import PostItem from "./PostItem";
import classes from "./PostList.module.css";

const PostList = ({ posts, ...props }) => {
  if (!posts.length) {
    return <h1 className={classes.noPosts}>No added Posts</h1>;
  }

  return (
    <div>
      <h1 className={classes.title}>{props.title}</h1>
      {posts.map((post, index) => (
        <PostItem
          onRemovePost={props.onRemovePost}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
