import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  let usersList;
  if (props.users.length !== 0) {
    usersList = props.users?.map((user, index) => {
      return (
        <li
          className={classes["users-list-item"]}
          key={`${user.username}${user.age}${index}`}
        >{`${user.username} ${user.age}`}</li>
      );
    });
  } else {
    usersList = <p>No Added Users</p>;
  }

  return (
    <Card>
      <ul className={classes["users-list"]}>{usersList}</ul>
    </Card>
  );
};

export default UsersList;
