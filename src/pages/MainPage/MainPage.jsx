import { useHistory } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
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
      <Button classes={styles.reserveBtn} onClick={() => history.push(routePaths.orderPage)}>
        Забронировать
      </Button>
    </div>
  );
};

export default MainPage;
