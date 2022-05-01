import React, { useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Login.module.css";

const Login = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      usernameRef.current.value.trim().length > 0 &&
      passwordRef.current.value.trim().length > 0
    ) {
      props.onUserLoggIn();
      console.log(usernameRef.current.value);
      console.log(passwordRef.current.value);
    } else {
      console.log("nope");
    }
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <label htmlFor="username">Username</label>
        <input id="username" ref={usernameRef} type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" ref={passwordRef} type="password" />
        <div className={classes["button-wrapper"]}>
          <Button type={"submit"} className={classes.button}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
