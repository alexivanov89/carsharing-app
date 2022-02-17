import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import {
  CloseIcon,
  FacebookSocialIcon,
  InstagramSocialIcon,
  TelegramSocialIcon,
} from '../../../assets/icons/Buttons';
import { LocalizationBtn } from '../LocalizationBtn';
import styles from './index.module.scss';

const Menu = ({ menuItems, menuActive, setMenuActive }) => {
  return (
    <div
      className={cn(styles.menu, {
        [styles.active]: menuActive,
      })}
    >
      <button className={styles.close} type="button" onClick={() => setMenuActive(false)}>
        <CloseIcon />
      </button>
      <div className={styles.fade} />
      <div className={styles.menu__content}>
        <div className={styles.menu__contentWrapper}>
          <ul>
            {menuItems.map((item) => (
              <Fragment key={item.value}>
                <li>
                  <Link to={item.to} onClick={() => setMenuActive(false)}>
                    {item.value}
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>
          <div className={styles.groupBtn}>
            <button className={styles.socialBtn} type="button">
              <TelegramSocialIcon />
            </button>
            <button className={styles.socialBtn} type="button">
              <FacebookSocialIcon />
            </button>
            <button className={styles.socialBtn} type="button">
              <InstagramSocialIcon />
            </button>
          </div>
        </div>
      </div>
      <LocalizationBtn lang="Eng" classes={styles.menuLocalizationBtn} />
    </div>
  );
};

export default Menu;
