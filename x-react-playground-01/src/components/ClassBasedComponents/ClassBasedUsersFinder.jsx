import React from "react";
import MyInput from "../../UI/MyInput";
import classes from "./ClassBasedUsersFinder.module.css";
import ClassToggleUsersList from "./ClassToggleUsersList";

const ClassBasedUsersFinder = () => {
  const usersData = [
    { id: "user01", name: "Bob" },
    { id: "user02", name: "Max" },
    { id: "user03", name: "George" },
  ];

  return (
    <div className={classes.userFinderWrapper}>
      <div className={classes.userFinderInputWrapper}>
        <MyInput
          label={{ name: "Find User" }}
          input={{
            type: "search",
            id: "FindUser",
            className: classes.inputFinder,
          }}
        />
      </div>
      <ClassToggleUsersList users={usersData} />
    </div>
  );
};

export default ClassBasedUsersFinder;
