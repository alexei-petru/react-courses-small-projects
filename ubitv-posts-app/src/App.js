import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import classes from "./App.module.css";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "1:14" },
    { id: 2, title: "css", body: "b" },
    { id: 3, title: "html", body: "a" },
  ]);

  const [filter, setFilter] = useState({ sort: "", querry: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      console.log("sorting posts");
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.querry.toLowerCase())
    );
  }, [sortedPosts, filter.querry]);

  const addPostHandler = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className={classes.App}>
      <PostForm onAddPost={addPostHandler} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList
          onRemovePost={removePostHandler}
          posts={sortedAndSearchedPosts}
          title={"List 1"}
        />
      ) : (
        <h1 className={classes.noPosts}>No added Posts</h1>
      )}
    </div>
  );
}

export default App;
