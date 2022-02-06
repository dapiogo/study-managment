import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UserList.styles';

const UsersList = (props) => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem {...userData} index={index} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
