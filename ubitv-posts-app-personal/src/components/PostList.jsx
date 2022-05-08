import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import classes from "./PostList.module.css";
import "./PostListTransitionGroup.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const NoPostsTitle = (props) => {
  const noPostsClasses = [
    classes.noPosts,
    props.isNoPosts ? classes.noPostsShow : classes.noPostsHide,
  ].join(" ");

  return <h1 className={noPostsClasses}>No added Posts</h1>;
};

export const PostsListTitle = (props) => {
  const titleClasses = [
    classes.title,
    props.isNoPosts ? classes.titleHide : classes.titleShown,
  ].join(" ");

  return <h1 className={titleClasses}>{props.title}</h1>;
};

const PostList = ({ posts, ...props }) => {
  const [isNoPosts, setIsNoPost] = useState(false);

  useEffect(() => {
    if (!posts.length) {
      setIsNoPost(true);
    } else {
      setIsNoPost(false);
    }
  }, [posts]);

  return (
    <div>
      <NoPostsTitle isNoPosts={isNoPosts} />
      <PostsListTitle isNoPosts={isNoPosts} title={props.title} />
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
