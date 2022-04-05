import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const usernameChangeHandler = () => {
    setEnteredUsername()
  };

  const formSubmitHandler = (event) => {
    console.log();
  };

  return (
    <Card className={classes["add-user-form-wrapper"]}>
      <form onSubmit={formSubmitHandler} className={classes["add-user-form"]}>
        <div className="input-wrapper">
          <label htmlFor="user-name">User Name</label>
          <input
            onChange={usernameChangeHandler}
            id="user-name"
            type="text"
            className={classes["user-name-input"]}
          />
        </div>
        <div className={classes["add-user-form-input-wrapper"]}>
          <label htmlFor="user-age">User Age</label>
          <input
            id="user-age"
            type="number"
            className={classes["add-user-form-input-wrapper"]}
          />
        </div>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
