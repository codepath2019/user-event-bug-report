import { map } from 'ramda';
import React from 'react';

const Selectbox = ({ onClick, menuItems }) => (
  map(
    menuItem => (
      <label onClick={onClick}>
        {menuItem.labelText}
        <input
          type="radio"
          value={menuItem.value}
        />
      </label>
    ),
    menuItems,
  )
);

export default Selectbox
