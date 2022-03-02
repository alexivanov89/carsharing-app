import styles from './index.module.scss';

const CarTotalInfo = ({ title, carTotalInfo }) => {
  const { carModel, stateNumberCar, isFullTank, carImage, accessDate } = carTotalInfo;

  return (
    <section className={styles.carTotalInfo}>
      <div className={styles.carInfo}>
        {title && <div className={styles.carInfo__title}>{title}</div>}
        <span className={styles.model}>{carModel}</span>
        <span className={styles.stateNumberCar}>{stateNumberCar}</span>
        {isFullTank && (
          <div className={styles.fuelQuantity}>
            <span className={styles.fuelQuantity__title}>Топливо &nbsp;</span>
            <span className={styles.fuelQuantity__value}>100%</span>
          </div>
        )}
        <div className={styles.accessDate}>
          <span className={styles.accessDate__title}>Доступна с &nbsp;</span>
          <span className={styles.accessDate__value}>{accessDate}</span>
        </div>
      </div>
      <div className={styles.carImage}>
        <img src={carImage} alt="car" loading="lazy" />
      </div>
    </section>
  );
};

export default CarTotalInfo;
