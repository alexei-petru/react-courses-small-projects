import { useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "55min" },
    { id: 2, title: "javascript", body: "description" },
    { id: 3, title: "javascript", body: "description" },
  ]);

  const addPostHandler = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm onAddPost={addPostHandler} />
      <PostList posts={posts} title={"List 1"} />
    </div>
  );
}

export default App;
