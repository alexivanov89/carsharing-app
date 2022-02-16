import { MenuIcon } from '../../../assets/icons/Buttons';

const MenuBtn = ({ classes, onClick }) => {
  return (
    <button className={classes} type="button" onClick={onClick}>
      <MenuIcon />
    </button>
  );
};

export default MenuBtn;
