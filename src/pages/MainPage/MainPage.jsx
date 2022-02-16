import { useHistory } from 'react-router-dom';
import { routePaths } from '../../router/routes';
import styles from './index.module.scss';
const MainPage = () => {
  const history = useHistory();

  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__label}>
        <h2>
          Каршеринг <br />
          <strong>Need for drive</strong>
        </h2>
        <p>Поминутная аренда авто твоего города</p>
      </div>
      <button
        className={styles.reserveBtn}
        type="button"
        onClick={() => history.push(routePaths.orderPage)}
      >
        Забронировать
      </button>
    </div>
  );
};

export default MainPage;
