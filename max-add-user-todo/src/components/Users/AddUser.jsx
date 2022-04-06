import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const errorHandler = () => {
    setError();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <>
      {error &&
        ReactDOM.createPortal(
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />,
          document.getElementById("modal-root")
        )}
      <Card className={classes["add-user-form-card"]}>
        <form onSubmit={formSubmitHandler} className={classes["add-user-form"]}>
          <div className="input-wrapper">
            <label htmlFor="user-name">User Name</label>
            <input
              id="user-name"
              type="text"
              className={classes["user-name-input"]}
              ref={nameInputRef}
            />
          </div>
          <div className={classes["add-user-form-input-wrapper"]}>
            <label htmlFor="user-age">User Age</label>
            <input
              id="user-age"
              type="number"
              className={classes["add-user-form-input-wrapper"]}
              ref={ageInputRef}
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
