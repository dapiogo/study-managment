import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo, StyledAverage } from './UsersListItem.styles';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import { UsersContext } from 'providers/UsersProvider';

const showIndex = (index) => alert(`This is student ${index + 1}`);

const UsersListItem = ({ index, average, name, attendance = '0%' }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper key={index}>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  index: PropTypes.number.isRequired,
  average: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};

export default UsersListItem;
