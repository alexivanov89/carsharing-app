import styles from './index.module.scss';

const CarTotalInfo = ({ title, carTotalInfo }) => {
  const { car, isFullTank, accessDate } = carTotalInfo;

  return (
    <section className={styles.carTotalInfo}>
      <div className={styles.carInfo}>
        {title && <div className={styles.carInfo__title}>{title}</div>}
        <span className={styles.model}>{car.name}</span>
        <span className={styles.stateNumberCar}>{car.number}</span>
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
        <img src={car.thumbnail.path} alt="car" loading="lazy" />
      </div>
    </section>
  );
};

export default CarTotalInfo;
