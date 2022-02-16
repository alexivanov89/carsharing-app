import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './index.module.scss';
import { CloseIcon } from '../../../assets/icons/Buttons';

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
      <div className={styles.blur} />
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
          <div>social icons</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
