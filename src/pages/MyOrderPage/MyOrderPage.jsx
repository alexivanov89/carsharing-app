import { useParams } from 'react-router-dom';
import { CarTotalInfo } from '../../components/CarTotalInfo';
import { LayoutOrderPage } from '../../components/LayoutOrderPage';
import { OrderInfo } from '../../components/OrderInfo';
import Button from '../../components/UI/Button/Button';
import carImage2 from '../../assets/img/carImage2.png';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';

const MyOrderPage = () => {
  const { id } = useParams();
  const { pointOfIssue, carOrder, rentalDuration, rate, price, additionalServices } = useSelector(
    ({ orderForm }) => orderForm,
  );

  const { city, point } = pointOfIssue;

  const carTotalInfo = {
    carModel: 'Hyndai, i30 N',
    stateNumberCar: 'К 761 НА 73',
    isFullTank: true,
    carImage: carImage2,
    accessDate: '12.06.2019 12:00',
  };

  const info = {
    city: city,
    point: point,
    carModel: carOrder.carName,
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
