import { Route, Switch } from 'react-router-dom';
import { SideBar } from './SideBar';
import { Slider } from './Slider';
import { MapLabel } from '../../assets/icons/UngroupedIcons';
import { Menu } from './Menu';
import { MenuBtn } from './MenuBtn';
import { routePaths } from '../../router/routes';
import styles from './index.module.scss';
import { useState } from 'react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyrights}>© 2016-2019 &laquo;Need for drive&raquo;</p>
      <a href="tel:+74952342244" className={styles.footer__contacts}>
        8 (495) 234-22-44
      </a>
    </footer>
  );
};

const Empty = () => {
  return <></>;
};

const menuItems = [
  { value: 'Парковка', to: routePaths.parking },
  { value: 'Страховка', to: routePaths.insurance },
  { value: 'Бензин', to: routePaths.benzine },
  { value: 'Обслуживание', to: routePaths.service },
];

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  console.log(menuActive);
  return (
    <div className={styles.layout}>
      <SideBar onClick={() => setMenuActive(!menuActive)} />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__group}>
            <MenuBtn classes={styles.header__menu} onClick={() => setMenuActive(!menuActive)} />
            <h1 className={styles.header__title}>Need for drive</h1>
          </div>
          <div className={styles.header__locationGroup}>
            <MapLabel className={styles.header__locationGroupIcon} />
            <div className={styles.header__locationGroupCity}>Ульяновск</div>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
        <Switch>
          <Route path={routePaths.mainPage} exact component={Footer} />
          <Route path={routePaths.orderPage} exact component={Empty} />
        </Switch>
      </div>
      <Switch>
        <Route path={routePaths.mainPage} exact component={Slider} />
        <Route path={routePaths.orderPage} exact component={Empty} />
      </Switch>
      <Menu menuItems={menuItems} menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
};

export default Layout;
