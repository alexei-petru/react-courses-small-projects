import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import classes from "./App.module.css";
import MySelect from "./components/UI/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "1:09" },
    { id: 2, title: "javascript", body: "description" },
    { id: 3, title: "javascript", body: "description" },
  ]);

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
      <div>
        <MySelect
          defaultValue={"Sort"}
          options={[
            { value: "name", name: "by name" },
            { value: "description", name: "by description" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          onRemovePost={removePostHandler}
          posts={posts}
          title={"List 1"}
        />
      ) : (
        <h1 className={classes.noPosts}>No added Posts</h1>
      )}
    </div>
  );
}

export default App;
