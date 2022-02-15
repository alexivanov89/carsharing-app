import { MenuBtn } from '../../../assets/icons/Buttons';
import { Menu } from '../../Menu';
import styles from './index.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      {/* <button className={styles.sideBar__menu} type="button">
        <MenuBtn />
      </button> */}
      <Menu classes={styles.sideBar__menu} />
      <button className={styles.sideBar__localizationBtn} type="button">
        Eng
      </button>
    </div>
  );
};

export default SideBar;
