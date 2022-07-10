import React, { FunctionComponent } from "react";
import { userType } from "../App";

// Create the Label React component​​​​​​‌​​‌​​‌​​​​​‌‌‌​​‌​‌‌‌‌‌‌ here

// const User: FunctionComponent<userType> = ({ user }) => {
//   console.log("user", user);
//   return (
//     <li>
//       {user.firstName} {user.lastName}
//     </li>
//   );
// };

export type userProps = {
  users: userType[];
};

const TestComponent = ({ users }: userProps) => {
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

export default TestComponent;
