import { MenuBtn } from '../MenuBtn';
import { LocalizationBtn } from '../LocalizationBtn';
import styles from './index.module.scss';

const SideBar = ({ onClick }) => {
  return (
    <div className={styles.sideBar}>
      <MenuBtn classes={styles.sideBar__menu} onClick={onClick} />
      <LocalizationBtn lang="Eng" />
    </div>
  );
};

export default SideBar;
