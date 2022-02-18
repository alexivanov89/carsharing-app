import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import {
  CloseIcon,
  FacebookSocialIcon,
  InstagramSocialIcon,
  TelegramSocialIcon,
} from '../../../assets/icons/Buttons';
import Button from '../../UI/Button/Button';
import styles from './index.module.scss';

const Menu = ({ menuItems, menuActive, setMenuActive }) => {
  return (
    <div
      className={cn(styles.menu, {
        [styles.active]: menuActive,
      })}
    >
      <Button classes={styles.close} onClick={() => setMenuActive(false)}>
        <CloseIcon />
      </Button>
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
            <Button classes={styles.socialBtn}>
              <TelegramSocialIcon />
            </Button>
            <Button classes={styles.socialBtn}>
              <FacebookSocialIcon />
            </Button>
            <Button classes={styles.socialBtn}>
              <InstagramSocialIcon />
            </Button>
          </div>
        </div>
      </div>
      <Button classes={styles.menuLocalizationBtn}>Eng</Button>
    </div>
  );
};

export default Menu;
