import React, { Component } from "react";
import MyInput from "../../UI/MyInput";
import classes from "./ClassBasedUsersFinder.module.css";
import ClassToggleUsersList from "./ClassToggleUsersList";
import ErrorBoundaries from "./ErrorBoundaries";

const usersData = [
  { id: "user01", name: "Bob" },
  { id: "user02", name: "Max" },
  { id: "user03", name: "Jonathas" },
  { id: "user04", name: "Alexandro" },
];

class ClassBasedUsersFinder extends Component {
  constructor() {
    super();
    this.state = { filteredUsers: usersData, searchTerm: "" };
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  filterUsers() {
    return usersData.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.filterUsers(),
      });
    }
  }

  render() {
    return (
      <div className={classes.userFinderWrapper}>
        <div className={classes.userFinderInputWrapper}>
          <MyInput
            label={{ name: "Find User" }}
            input={{
              type: "search",
              id: "FindUser",
              className: classes.inputFinder,
              onChange: this.searchChangeHandler.bind(this),
            }}
          />
        </div>
        <ErrorBoundaries>
          <ClassToggleUsersList users={this.state.filteredUsers} />
        </ErrorBoundaries>
      </div>
    );
  }
}

// const ClassBasedUsersFinder = () => {
//   const usersData = [
//     { id: "user01", name: "Bob" },
//     { id: "user02", name: "Max" },
//     { id: "user03", name: "Jonathas" },
//     { id: "user04", name: "Alexandro" },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState(usersData);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     const filteredData = usersData.filter((user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredUsers(filteredData);
//   }, [searchTerm]);

//   return (
//     <div className={classes.userFinderWrapper}>
//       <div className={classes.userFinderInputWrapper}>
//         <MyInput
//           label={{ name: "Find User" }}
//           input={{
//             type: "search",
//             id: "FindUser",
//             className: classes.inputFinder,
//             onChange: searchChangeHandler,
//           }}
//         />
//       </div>
//       <ClassToggleUsersList users={filteredUsers} />
//     </div>
//   );
// };

export default ClassBasedUsersFinder;
