import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LayoutOrderPage } from '../../components/LayoutOrderPage';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import OrderForm from './OrderForm/OrderForm';
import { OrderInfo } from '../../components/OrderInfo';
import NavigationOrder from './NavigationOrder/NavigationOrder';
import { setCurrentStep, setFilledStep } from '../../store/slices/orderFormSlice';
import { routePaths } from '../../router/routes';
import { renderButton } from './utils/renderButton';
import styles from './index.module.scss';

const OrderPage = () => {
  const dispatch = useDispatch();
  const {
    currentStep,
    filledStep,
    pointOfIssue,
    car,
    rentalDuration,
    rate,
    price,
    additionalServices,
  } = useSelector(({ orderForm }) => orderForm);
  const history = useHistory();

  const { city, point } = pointOfIssue;
  const [modalActive, setModalActive] = useState(false);

  const onSteps = {
    onStep0: {
      onClick: () => {
        dispatch(setCurrentStep(currentStep + 1));
        dispatch(setFilledStep(filledStep + 1));
      },
      disabled: !(city && point),
    },
    onStep1: {
      onClick: () => {
        dispatch(setCurrentStep(currentStep + 1));
        dispatch(setFilledStep(filledStep + 1));
      },
      disabled: !car.model,
    },
    onStep2: {
      onClick: () => {
        dispatch(setCurrentStep(currentStep + 1));
        dispatch(setFilledStep(filledStep + 1));
      },
      disabled: !(car.color && rentalDuration && rate),
    },
    onStep3: {
      onClick: () => {
        setModalActive(true);
      },
    },
  };

  const info = {
    city: city,
    point: point,
    carModel: car.model,
    carColor: car.color,
    rentalDuration: rentalDuration,
    rate: rate,
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
              history.push(`${routePaths.myOrderPage}/RU58491823`);
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
