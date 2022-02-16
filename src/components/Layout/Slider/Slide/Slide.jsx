import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';

const Slide = ({ background, label, stylesBtn, routePathBtn }) => {
  const history = useHistory();

  return (
    <div
      className={styles.slide}
      style={{
        background: `url(${background}) center / cover no-repeat `,
      }}
    >
      <div className={styles.slide__label}>
        <h3>{label.title}</h3>
        <p>{label.subtitle}</p>
      </div>
      <button className={stylesBtn} type="button" onClick={() => history.push(routePathBtn)}>
        Подробнее
      </button>
    </div>
  );
};

export default Slide;
