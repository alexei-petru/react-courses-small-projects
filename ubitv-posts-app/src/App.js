import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import classes from "./App.module.css";
import MySelect from "./components/UI/MySelect";
import MyInput from "./components/UI/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "1:13" },
    { id: 2, title: "css", body: "b" },
    { id: 3, title: "html", body: "a" },
  ]);

  const [searchQuerry, setSearchQuerry] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const getSortedPosts = function () {
    if (selectedSort) {
      console.log("sorting posts");
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else {
      return posts;
    }
  };

  const sortedPosts = getSortedPosts();

  const addPostHandler = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className={classes.App}>
      <PostForm onAddPost={addPostHandler} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          onChange={(event) => setSearchQuerry(event.target.value)}
          placeholder={"Search..."}
          value={searchQuerry}
          type={"text"}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Sort"}
          options={[
            { value: "title", name: "by title" },
            { value: "body", name: "by description" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          onRemovePost={removePostHandler}
          posts={sortedPosts}
          title={"List 1"}
        />
      ) : (
        <h1 className={classes.noPosts}>No added Posts</h1>
      )}
    </div>
  );
}

export default App;
