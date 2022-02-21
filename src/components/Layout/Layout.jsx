import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { Empty } from '../Empty';
import { Menu } from './Menu';
import { MenuIcon } from '../../assets/icons/Buttons';
import { MapLabel } from '../../assets/icons/UngroupedIcons';
import { SideBar } from './SideBar';
import { Slider } from './Slider';
import { routePaths } from '../../router/routes';
import BG1 from '../../assets/img/Slider1.webp';
import BG2 from '../../assets/img/Slider2.webp';
import BG3 from '../../assets/img/Slider3.webp';
import BG4 from '../../assets/img/Slider4.webp';
import styles from './index.module.scss';

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

const menuItems = [
  { value: 'Парковка', to: routePaths.parking },
  { value: 'Страховка', to: routePaths.insurance },
  { value: 'Бензин', to: routePaths.benzine },
  { value: 'Обслуживание', to: routePaths.service },
];

const slides = [
  {
    background: BG1,
    label: {
      title: 'Бесплатная парковка',
      subtitle: `Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а
также в аэропортах.`,
    },
    stylesBtn: styles.slider1Btn,
    routePathBtn: routePaths.parking,
  },
  {
    background: BG2,
    label: {
      title: 'Страховка',
      subtitle: `Полная страховка страховка автомобиля`,
    },
    stylesBtn: styles.slider2Btn,
    routePathBtn: routePaths.insurance,
  },
  {
    background: BG3,
    label: {
      title: 'Бензин',
      subtitle: `Полный бак на любой заправке города за наш счёт`,
    },
    stylesBtn: styles.slider3Btn,
    routePathBtn: routePaths.benzine,
  },
  {
    background: BG4,
    label: {
      title: 'Обслуживание',
      subtitle: `Автомобиль проходит еженедельное ТО`,
    },
    stylesBtn: styles.slider4Btn,
    routePathBtn: routePaths.service,
  },
];

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={styles.layout}>
      <SideBar onClick={() => setMenuActive(!menuActive)} />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__group}>
            <Button classes={styles.header__menu} onClick={() => setMenuActive(!menuActive)}>
              <MenuIcon />
            </Button>
            <h1 className={styles.header__title}>Need for drive</h1>
          </div>
          <Button classes={styles.header__locationGroupBtn}>
            <div className={styles.header__locationGroup}>
              <MapLabel className={styles.header__locationGroupIcon} />
              <div className={styles.header__locationGroupCity}>Ульяновск</div>
            </div>
          </Button>
        </header>
        <main className={styles.main}>{children}</main>
        <Switch>
          <Route path={routePaths.mainPage} exact component={Footer} />
          <Route path={routePaths.orderPage} exact component={Empty} />
        </Switch>
      </div>
      <Switch>
        <Route
          path={routePaths.mainPage}
          exact
          component={() => <Slider menuActive={menuActive} slides={slides} />}
        />
        <Route path={routePaths.orderPage} exact component={Empty} />
      </Switch>
      <Menu menuItems={menuItems} menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
};

export default Layout;
