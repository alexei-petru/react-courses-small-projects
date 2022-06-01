import { useEffect, useState } from "react";
import PostService from "../API/PostService";
import classes from "../styles/Posts.module.css";
import PostFilter from "../components/PostFilter/PostFilter";
import PostForm from "../components/PostForm/PostForm";
import PostList from "../components/PostList/PostList";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/MyButton/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/Pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "2:22" },
    { id: 2, title: "css", body: "b" },
    { id: 3, title: "html", body: "a" },
  ]);

  const [filter, setFilter] = useState({ sort: "", querry: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.querry);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchingPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    console.log(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const addPostHandler = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchingPosts();
  }, [page]);

  return (
    <div className={classes.posts}>
      <MyButton onClick={fetchingPosts}>Request Posts</MyButton>
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Add Post
      </MyButton>
      <MyModal setVisible={setModal} visible={modal}>
        <PostForm onAddPost={addPostHandler} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Something went wrong</h1>}
      {isPostLoading ? (
        <div className={classes["loader-wrapper"]}>
          <Loader />
        </div>
      ) : (
        <PostList
          onRemovePost={removePostHandler}
          posts={sortedAndSearchedPosts}
          title={"List 1"}
        />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={setPage} />
    </div>
  );
}

export default Posts;
