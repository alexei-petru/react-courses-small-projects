import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length < 1 ||
      !enteredUsername.match(/[a-zA-Z]/)
    ) {
      setError({
        title: "Invalid User Name",
        message: "Please enter a valid name",
      });
      return;
    }
    if (+enteredAge < 1 || +enteredAge > 150 || enteredAge.trim() === "") {
      setError({ title: "Invalid Age", message: "Please enter a valid Age" });
      return;
    } else {
      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes["add-user-form-card"]}>
        <form onSubmit={formSubmitHandler} className={classes["add-user-form"]}>
          <div className="input-wrapper">
            <label htmlFor="user-name">User Name</label>
            <input
              onChange={usernameChangeHandler}
              id="user-name"
              type="text"
              className={classes["user-name-input"]}
              value={enteredUsername}
            />
          </div>
          <div className={classes["add-user-form-input-wrapper"]}>
            <label htmlFor="user-age">User Age</label>
            <input
              onChange={ageChangeHandler}
              id="user-age"
              type="number"
              className={classes["add-user-form-input-wrapper"]}
              value={enteredAge}
            />
          </div>
          <Button type="submit" className={classes["submit-button"]}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
