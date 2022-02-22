import React, { useReducer, useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "./Input";

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.val, isValid: action.val.trim().length >= 7 };
  }
  if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length >= 7 };
  }
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeoutExecuted");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    return () => {
      console.log("timeout cleared");
      clearTimeout(timeout);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT", val: event.target.value });
  };

  const validateEmailHandler = (event) => {
    dispatchEmail({ type: "INPUT_BLUR", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input />
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
