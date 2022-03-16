import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LayoutOrderPage } from '../../components/LayoutOrderPage';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import OrderForm from './OrderForm/OrderForm';
import { OrderInfo } from '../../components/OrderInfo';
import NavigationOrder from './NavigationOrder/NavigationOrder';
import { setCurrentStep, setFilledStep, setOrderStatus } from '../../store/slices/orderFormSlice';
import { setMyOrder } from '../../store/slices/myOrder';
import { tableService } from '../../services/tableService';
import { routePaths } from '../../router/routes';
import { renderButton } from './utils/renderButton';
import styles from './index.module.scss';

const OrderPage = () => {
  const dispatch = useDispatch();
  const {
    currentStep,
    pointOfIssue,
    carOrder,
    rentalDuration,
    rateOrder,
    price,
    additionalServices,
    dateFrom,
    dateTo,
    orderStatus,
  } = useSelector(({ orderForm }) => orderForm);
  const history = useHistory();

  const { city, point } = pointOfIssue;
  const [modalActive, setModalActive] = useState(false);

  const onSteps = {
    onStep0: {
      onClick: () => {
        dispatch(setCurrentStep(1));
        dispatch(setFilledStep(0));
      },
      disabled: !(city.value && point.value),
    },
    onStep1: {
      onClick: () => {
        dispatch(setCurrentStep(2));
        dispatch(setFilledStep(1));
      },
      disabled: !carOrder.car.id,
    },
    onStep2: {
      onClick: () => {
        dispatch(setCurrentStep(3));
        dispatch(setFilledStep(2));
      },
      disabled: !(carOrder.color && rentalDuration.value && rateOrder.id),
    },
    onStep3: {
      onClick: () => {
        dispatch(
          setOrderStatus({
            name: 'Новые',
            id: '5e26a191099b810b946c5d89',
          }),
        );
        setModalActive(true);
      },
    },
  };

  const info = {
    city: city,
    point: point,
    carModel: carOrder.car.name,
    carColor: carOrder.color,
    rentalDuration: rentalDuration,
    rate: rateOrder.rateTypeId.name,
    price: price,
    isFullTank: additionalServices.fullTank,
    isNeedChildChair: additionalServices.babyChair,
    isRightWheel: additionalServices.rightHandDrive,
  };

  return (
    <>
      <LayoutOrderPage
        header={<NavigationOrder />}
        mainField={<OrderForm />}
        asideField={<OrderInfo info={info} button={renderButton(currentStep, onSteps)} />}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.modal__header}>Подтвердить заказ</div>
        <div className={styles.modal__body}>
          <Button
            classes={styles.button__confirm}
            onClick={() => {
              const body = {
                orderStatusId: orderStatus,
                cityId: {
                  name: pointOfIssue.city.label,
                  id: pointOfIssue.city.value,
                },
                pointId: {
                  address: pointOfIssue.point.label,
                  name: pointOfIssue.point.name,
                  id: pointOfIssue.point.value,
                },
                carId: carOrder.car,
                color: carOrder.color,
                dateFrom: dateFrom,
                dateTo: dateTo,
                rateId: rateOrder,
                price: price.calculated,
                isFullTank: additionalServices.fullTank,
                isNeedChildChair: additionalServices.babyChair,
                isRightWheel: additionalServices.rightHandDrive,
              };

              tableService
                .postOrder(body)
                .then((res) => {
                  const order = res.data.data;
                  history.push(`${routePaths.myOrderPage}/${order.id}`);
                })
                .catch((e) => console.log(e));
            }}
          >
            Подтвердить
          </Button>
          <Button
            classes={styles.button__return}
            onClick={() => {
              setModalActive(false);
            }}
          >
            Вернуться
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default OrderPage;
