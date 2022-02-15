import React from 'react';
import { MenuBtn } from '../../assets/icons/Buttons';

const Menu = ({ classes }) => {
  return (
    <button className={classes} type="button">
      <MenuBtn />
    </button>
  );
};

export default Menu;
