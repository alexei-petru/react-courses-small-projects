import React from "react";
import MyInput from "./UI/MyInput";
import MySelect from "./UI/MySelect";

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
        value={filter.sort}
        onChange={(slectedSort) => setFilter({ ...filter, sort: slectedSort })}
        defaultValue={"Sort"}
        options={[
          { value: "title", name: "by title" },
          { value: "body", name: "by description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
