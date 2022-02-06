import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ index, average, name, attendance = '0%' }) => {
  return (
    <li key={index}>
      <div>{average}</div>
      <div>{name}</div>
      <p>attendance:{attendance}</p>
      <button>x</button>
    </li>
  );
};

UsersListItem.propTypes = {
  index: PropTypes.number.isRequired,
  average: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};

export default UsersListItem;
