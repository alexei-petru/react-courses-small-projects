// import React from "react";

// const ClassToggleUser = (props) => {
//   return <li>{props.name}</li>;
// };

// export default ClassToggleUser;

import classes from "./ClassToggleUser.module.css"

import { Component } from "react";

class ClassToggleUser extends Component {
  render() {
    return <li className={classes.userName}>{this.props.name}</li>;
  }
}

export default ClassToggleUser;
