import React from "react";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        onChange={(event) =>
          setFilter({ ...filter, querry: event.target.value })
        }
        placeholder={"Search..."}
        value={filter.querry}
        type={"text"}
      />
      <MySelect
        defaultValue={"UNSORTED"}
        value={filter.sort}
        onChange={(slectedSort) => setFilter({ ...filter, sort: slectedSort })}
        options={[
          { value: "title", name: "by title" },
          { value: "body", name: "by description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
