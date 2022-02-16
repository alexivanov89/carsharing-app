import { MenuBtn } from '../MenuBtn';
import styles from './index.module.scss';

const SideBar = ({ onClick }) => {
  return (
    <div className={styles.sideBar}>
      <MenuBtn classes={styles.sideBar__menu} onClick={onClick} />
      <button className={styles.sideBar__localizationBtn} type="button">
        Eng
      </button>
    </div>
  );
};

export default SideBar;
