import React from "react";

const PostForm = (props) => {
  const [post, setPost] = useState({ title: "", body: "" });

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
