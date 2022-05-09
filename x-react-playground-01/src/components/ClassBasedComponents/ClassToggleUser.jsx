// import React from "react";

// const ClassToggleUser = (props) => {
//   return <li>{props.name}</li>;
// };

// export default ClassToggleUser;

import { Component } from "react";

class ClassToggleUser extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default ClassToggleUser;
