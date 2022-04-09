import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  const [usersData, setUsersData] = useState([
    { username: "Max", age: 31 },
    { username: "Bob", age: 42 },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addUserHandler = (username, age) => {
    setUsersData((prev) => [...prev, { username: username, age: age }]);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const loggOutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header onUserLoggOut={loggOutHandler} isLoggedIn={isLoggedIn} />
      <div className="container">
        {isLoggedIn ? (
          <>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UsersList users={usersData} />
          </>
        ) : (
          <Login onUserLoggIn={loginHandler} />
        )}
      </div>
    </>
  );
}

export default App;
