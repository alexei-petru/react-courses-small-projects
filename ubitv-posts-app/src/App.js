import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import classes from "./App.module.css";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal";
import MyButton from "./components/UI/MyButton";
import { usePosts } from "./hooks/usePosts";

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
  return (
    <div className={classes.App}>
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
