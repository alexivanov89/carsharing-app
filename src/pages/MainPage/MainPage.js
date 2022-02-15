import styles from './index.module.scss';
const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__label}>
        <h2>
          Каршеринг <br />
          <strong>Need for drive</strong>
        </h2>
        <p>Поминутная аренда авто твоего города</p>
      </div>
      <button className={styles.reserveBtn} type="button">
        Забронировать
      </button>
    </div>
  );
};

export default MainPage;
