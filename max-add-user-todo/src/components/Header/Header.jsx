import React from "react";
import classes from "./Header.module.css";
import Button from "../UI/Button";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes["header__container"]}>
        <h2 className={classes["header__message"]}>Welcome Stranger</h2>
        {props.isLoggedIn && (
          <Button onClick={props.onUserLoggOut}>Logout</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
