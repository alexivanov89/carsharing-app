import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import intervalToDuration from 'date-fns/intervalToDuration';
import format from 'date-fns/format';
import { CarTotalInfo } from '../../components/CarTotalInfo';
import { LayoutOrderPage } from '../../components/LayoutOrderPage';
import { OrderInfo } from '../../components/OrderInfo';
import Button from '../../components/UI/Button/Button';
import { fetchOrderAsync } from '../../store/slices/myOrderSlice';
import styles from './index.module.scss';

const MyOrderPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { order, loading, error } = useSelector(({ myOrder }) => myOrder);

  const interval =
    order.dateTo && order.dateFrom
      ? intervalToDuration({ start: new Date(order.dateFrom), end: new Date(order.dateTo) })
      : null;

  const carTotalInfo = {
    car: order.carId,
    isFullTank: order.isFullTank,
    accessDate: order.dateFrom ? format(new Date(order.dateFrom), 'dd.MM.yyyy k:mm') : null,
  };

  const info = {
    city: {
      label: order.cityId.name,
      value: order.cityId.id,
    },
    point: {
      label: order.pointId.address,
      value: order.pointId.id,
      name: order.pointId.name,
    },
    carModel: order.carId.name,
    carColor: order.color,
    rentalDuration: {
      label: interval ? `${interval.days}д ${interval.hours}ч ${interval.minutes}м` : null,
      value: order.dateTo && order.dateFrom ? order.dateTo - order.dateFrom : null,
    },
    rate: order.rateId.rateTypeId.name,
    price: {
      calculated: order.price,
    },
    isFullTank: order.isFullTank,
    isNeedChildChair: order.isNeedChildChair,
    isRightWheel: order.isRightWheel,
  };

  useEffect(() => {
    dispatch(fetchOrderAsync(id));
  }, [id]);

  return (
    !loading &&
    !error && (
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
    )
  );
};

export default MyOrderPage;
