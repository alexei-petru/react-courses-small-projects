import React, { FunctionComponent } from "react";
import { userType } from "../App";

const users: userType[] = [
  { firstName: "Ada", lastName: "Cardinal" },
  { firstName: "Ada", lastName: "Brown" },
];

const UsersArray = () => {
  console.log(users);
  const sortedUsers = [...users];
  sortedUsers.sort((user1, user2) => {
    return user1.lastName.toLowerCase() > user2.lastName.toLowerCase() ? 1 : -1;
  });

  return (
    <div>
      <div className="user-count">Users: {sortedUsers.length}</div>
      {sortedUsers.length && (
        <ul className="user-list">
          {sortedUsers.map((user) => (
            // <User user={user} key={user.lastName} />
            <li key={user.lastName}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersArray;
