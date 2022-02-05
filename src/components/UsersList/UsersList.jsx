import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = (props) => {
  return (
    <div>
      <ul>
        {users.map((userData, index) => (
          <UsersListItem {...userData} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
