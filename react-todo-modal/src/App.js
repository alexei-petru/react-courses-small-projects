import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [keyId, setKeyId] = useState(0);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUser) => {
      setKeyId((prevUser) => ++prevUser);
      return [...prevUser, { name: uName, age: uAge, id: keyId + uName }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
