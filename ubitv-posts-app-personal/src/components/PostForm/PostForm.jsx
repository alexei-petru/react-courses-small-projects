import { React, useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const PostForm = (props) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    props.onAddPost(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        value={post.title}
        type="text"
        placeholder={"Post Name"}
      />
      <MyInput
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        value={post.body}
        type="text"
        placeholder={"Post Description"}
      />
      <MyButton onClick={addNewPost}>Add Post</MyButton>
    </form>
  );
};

export default PostForm;
