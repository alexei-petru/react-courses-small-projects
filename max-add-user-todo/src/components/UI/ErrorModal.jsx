import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div onClick={props.onConfirm} className={classes.backdrop}>
      <Card className={classes.modal}>
        <header>
          <h2 className={classes["error-title"]}>{props.title}</h2>
        </header>
        <div className={classes["error-message_wrapper"]}>
          <p className={classes["error-message"]}>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
