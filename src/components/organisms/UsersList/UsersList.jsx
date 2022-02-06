import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import { Title } from 'components/atoms/Title/Title';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Student list</Title>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem {...userData} index={index} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
