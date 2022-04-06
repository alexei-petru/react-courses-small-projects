import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersData, setUsersData] = useState([
    { username: "Max", age: 31 },
    { username: "Bob", age: 42 },
  ]);

  const addUserHandler = (username, age) => {
    setUsersData((prev) => [...prev, { username: username, age: age }]);
  };

  return (
    <div className="container">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
