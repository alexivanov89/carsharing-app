import Button from '../../UI/Button/Button';
import { MenuIcon } from '../../../assets/icons/Buttons';
import styles from './index.module.scss';

const SideBar = ({ onClick }) => {
  return (
    <div className={styles.sideBar}>
      <Button classes={styles.sideBar__menu} onClick={onClick}>
        <MenuIcon />
      </Button>
      <Button classes={styles.localizationBtn}>Eng</Button>
    </div>
  );
};

export default SideBar;
