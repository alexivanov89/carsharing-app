import { numberWithSpaces } from '../../utils/numberWithSpaces';
import styles from './index.module.scss';

const OrderInfo = ({ button, info }) => {
  const {
    city,
    point,
    carModel,
    carColor,
    rentalDuration,
    rate,
    price,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = info;
  return (
    <>
      <div className={styles.orderInfo__header}>Ваш заказ:</div>
      <div className={styles.orderInfo__params}>
        {city && point && (
          <div className={styles.orderInfo__param}>
            <div className={styles.orderInfo__param__name}>Пункт выдачи</div>
            <div className={styles.orderInfo__param__value}>
              <div className={styles.orderInfo__city}>{`${city},`}</div>
              <div className={styles.pointOfIssue}>{point}</div>
            </div>
          </div>
        )}
        {carModel && (
          <div className={styles.orderInfo__param}>
            <div className={styles.orderInfo__param__name}>Модель</div>
            <div className={styles.orderInfo__param__value}>
              <div className={styles.orderInfo__carModel}>{carModel}</div>
            </div>
          </div>
        )}
        {carColor && (
          <div className={styles.orderInfo__param}>
            <div className={styles.orderInfo__param__name}>Цвет</div>
            <div className={styles.orderInfo__param__value}>
              <div className={styles.orderInfo__carColor}>{carColor}</div>
            </div>
          </div>
        )}
        {rentalDuration && (
          <div className={styles.orderInfo__param}>
            <div className={styles.orderInfo__param__name}>Длительность аренды</div>
            <div className={styles.orderInfo__param__value}>
              <div className={styles.orderInfo__rentalDuration}>{rentalDuration}</div>
            </div>
          </div>
        )}
        {rate && (
          <div className={styles.orderInfo__param}>
            <div className={styles.orderInfo__param__name}>Тариф</div>
            <div className={styles.orderInfo__param__value}>
              <div className={styles.orderInfo__rate}>{rate}</div>
            </div>
          </div>
        )}
        {isFullTank && (
          <div className={styles.orderInfo__param}>
            <div className={styles.orderInfo__param__name}>Полный бак</div>
            <div className={styles.orderInfo__param__value}>
              <div className={styles.orderInfo__fullTank}>Да</div>
            </div>
          </div>
        )}
        {isNeedChildChair && (
          <div className={styles.orderInfo__param}>
            <div className={styles.orderInfo__param__name}>Детское кресло</div>
            <div className={styles.orderInfo__param__value}>
              <div className={styles.orderInfo__babyChair}>Да</div>
            </div>
          </div>
        )}
        {isRightWheel && (
          <div className={styles.orderInfo__param}>
            <div className={styles.orderInfo__param__name}>Правый руль</div>
            <div className={styles.orderInfo__param__value}>
              <div className={styles.orderInfo__rightHandDrive}>Да</div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.orderInfo__price}>
        <p className={styles.orderInfo__price__label}>Цена:&nbsp;</p>
        <p className={styles.orderInfo__price__value}>
          {price.calculated
            ? `${price.calculated} ₽`
            : `от ${numberWithSpaces(price.min)} до ${numberWithSpaces(price.max)} ₽`}
        </p>
      </div>
      {button}
    </>
  );
};

export default OrderInfo;
