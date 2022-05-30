import { useState } from "react";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";
import classes from "./App.module.css";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "1:30" },
    { id: 2, title: "css", body: "b" },
    { id: 3, title: "html", body: "a" },
  ]);

  const [filter, setFilter] = useState({ sort: "", querry: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.querry);

  const addPostHandler = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };

  return (
    <div className={classes.App}>
      <MyButton onClick={fetchPosts}>Request Posts</MyButton>
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Add Post
      </MyButton>
      <MyModal setVisible={setModal} visible={modal}>
        <PostForm onAddPost={addPostHandler} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        onRemovePost={removePostHandler}
        posts={sortedAndSearchedPosts}
        title={"List 1"}
      />
    </div>
  );
}

export default App;
