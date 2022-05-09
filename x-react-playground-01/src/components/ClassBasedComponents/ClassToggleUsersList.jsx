import React, { useState } from "react";
import MyButton from "../../UI/MyButton";
import ClassToggleUser from "./ClassToggleUser";
import classes from "./ClassToggleUsersList.module.css";

const ClassToggleUsersList = () => {
  const usersData = [
    { id: "user01", name: "Bob" },
    { id: "user02", name: "Max" },
    { id: "user03", name: "George" },
  ];

  const [showUsersList, setShowUsersList] = useState(true);

  const toogleUsersList = () => {
    setShowUsersList((prev) => !prev);
  };

  const usersList = (
    <ul>
      {usersData.map((user) => (
        <ClassToggleUser key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.usersListWrapper}>
      <MyButton onClick={toogleUsersList} className={classes.toggleUsersBtn}>
        Toggle Users List
      </MyButton>
      {showUsersList ? usersList : <p>No Users List</p>}
    </div>
  );
};

export default ClassToggleUsersList;
