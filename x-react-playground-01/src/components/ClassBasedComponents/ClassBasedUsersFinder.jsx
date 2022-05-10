import React, { useEffect, useState } from "react";
import MyInput from "../../UI/MyInput";
import classes from "./ClassBasedUsersFinder.module.css";
import ClassToggleUsersList from "./ClassToggleUsersList";

const ClassBasedUsersFinder = () => {
  const usersData = [
    { id: "user01", name: "Bob" },
    { id: "user02", name: "Max" },
    { id: "user03", name: "George" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredData = usersData.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredData);
  }, [searchTerm]);

  return (
    <div className={classes.userFinderWrapper}>
      <div className={classes.userFinderInputWrapper}>
        <MyInput
          label={{ name: "Find User" }}
          input={{
            type: "search",
            id: "FindUser",
            className: classes.inputFinder,
            onChange: searchChangeHandler,
          }}
        />
      </div>
      <ClassToggleUsersList users={filteredUsers} />
    </div>
  );
};

export default ClassBasedUsersFinder;
