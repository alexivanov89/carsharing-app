import { SideBar } from './SideBar';
import { Slider } from './Slider';
import styles from './index.module.scss';
import { MapLabel } from '../../assets/icons/UngroupedIcons';
import { Menu } from '../Menu';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__group}>
            <Menu classes={styles.header__menu} />
            <h1 className={styles.header__title}>Need for drive</h1>
          </div>
          <div className={styles.header__locationGroup}>
            <MapLabel className={styles.header__locationGroupIcon} />
            <div className={styles.header__locationGroupCity}>Ульяновск</div>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p className={styles.footer__copyrights}>© 2016-2019 &laquo;Need for drive&raquo;</p>
          <p className={styles.footer__contacts}>8 (495) 234-22-44</p>
        </footer>
      </div>
      <Slider />
    </div>
  );
};

export default Layout;
