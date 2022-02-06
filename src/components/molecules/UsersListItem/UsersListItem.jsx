import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo, StyledAverage } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ index, average, name, attendance = '0%' }) => {
  return (
    <Wrapper key={index}>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <Button />
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
