import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import styles from './UsersList.module.scss';

const UsersList = (props) => {
  return (
    <div className={[styles.container, styles.hasBorder].join(' ')}>
      <ul>
        {users.map((userData, index) => (
          <UsersListItem {...userData} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
