import React, { Component, useState } from "react";
import MyButton from "../../UI/MyButton";
import ClassToggleUser from "./ClassToggleUser";
import classes from "./ClassToggleUsersList.module.css";

class ClassToggleUsersList extends Component {
  constructor() {
    super();
    this.state = {
      showUsersList: true,
      more: "test",
    };
  }
  toogleUsersList = () => {
    this.setState((prev) => {
      return { showUsersList: !prev.showUsersList };
    });
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <ClassToggleUser key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.usersListWrapper}>
        <MyButton
          onClick={this.toogleUsersList.bind(this)}
          className={classes.toggleUsersBtn}
        >
          Toggle Users List
        </MyButton>
        {this.state.showUsersList ? usersList : <p>No Users List</p>}
      </div>
    );
  }
}

// const ClassToggleUsersList = () => {
//   const usersData = [
//     { id: "user01", name: "Bob" },
//     { id: "user02", name: "Max" },
//     { id: "user03", name: "George" },
//   ];
//   const [showUsersList, setShowUsersList] = useState(true);

//   const toogleUsersList = () => {
//     setShowUsersList((prev) => !prev);
//   };

//   const usersList = (
//     <ul>
//       {usersData.map((user) => (
//         <ClassToggleUser key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.usersListWrapper}>
//       <MyButton onClick={toogleUsersList} className={classes.toggleUsersBtn}>
//         Toggle Users List
//       </MyButton>
//       {showUsersList ? usersList : <p>No Users List</p>}
//     </div>
//   );
// };

export default ClassToggleUsersList;
