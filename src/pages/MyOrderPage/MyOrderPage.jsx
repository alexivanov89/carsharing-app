import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CarTotalInfo } from '../../components/CarTotalInfo';
import { LayoutOrderPage } from '../../components/LayoutOrderPage';
import { OrderInfo } from '../../components/OrderInfo';
import Button from '../../components/UI/Button/Button';
import styles from './index.module.scss';

const MyOrderPage = () => {
  const { id } = useParams();
  const { pointOfIssue, carOrder, rentalDuration, rate, price, additionalServices } = useSelector(
    ({ orderForm }) => orderForm,
  );
  const { order } = useSelector(({ myOrder }) => myOrder);

  const { city, point } = pointOfIssue;

  const carTotalInfo = {
    car: carOrder.car,
    isFullTank: true,
    accessDate: '12.06.2019 12:00',
  };

  const info = {
    city: city,
    point: point,
    carModel: carOrder.car.name,
    carColor: carOrder.color,
    rentalDuration: rentalDuration,
    rate: rate,
    price: price,
    isFullTank: additionalServices.fullTank,
    isNeedChildChair: additionalServices.babyChair,
    isRightWheel: additionalServices.rightHandDrive,
  };

  return (
    <LayoutOrderPage
      header={
        <>
          <span className={styles.header__title}>Заказ номер &nbsp;</span>
          <span className={styles.header__value}>{id}</span>
        </>
      }
      mainField={<CarTotalInfo title="Ваш заказ подтверждён" carTotalInfo={carTotalInfo} />}
      asideField={
        <OrderInfo
          info={info}
          button={
            <Button classes={styles.orderInfo__button} onClick={() => {}}>
              Отменить
            </Button>
          }
        />
      }
    />
  );
};

export default MyOrderPage;
