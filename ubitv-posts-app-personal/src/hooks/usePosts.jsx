import { React, useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort && sort !== "UNSORTED") {
      console.log("sorting posts");
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return posts;
    }
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, querry) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(querry.toLowerCase())
    );
  }, [sortedPosts, querry]);
  return sortedAndSearchedPosts;
};
