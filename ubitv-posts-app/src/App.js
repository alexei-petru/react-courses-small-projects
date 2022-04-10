import { useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/MyButton";
import MyInput from "./components/UI/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "55min" },
    { id: 2, title: "javascript", body: "description" },
    { id: 3, title: "javascript", body: "description" },
  ]);

  const addNewPost = (event) => {
    event.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <PostForm />
      <PostList posts={posts} title={"List 1"} />
    </div>
  );
}

export default App;
