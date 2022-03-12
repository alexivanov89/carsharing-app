import { useDispatch, useSelector } from 'react-redux';
import { SeparatorIcon } from '../../../assets/icons/UngroupedIcons';
import Button from '../../../components/UI/Button/Button';
import { setCurrentStep } from '../../../store/slices/orderFormSlice';
import styles from './index.module.scss';

const NavigationOrder = () => {
  const dispatch = useDispatch();
  const { currentStep, filledStep, pointOfIssue } = useSelector(({ orderForm }) => orderForm);
  const { city, point } = pointOfIssue;

  return (
    <>
      <Button
        classes={styles.button__navigation}
        filled={filledStep >= -1}
        active={currentStep === 0}
        onClick={() => {
          dispatch(setCurrentStep(0));
        }}
      >
        Местоположение
      </Button>
      <div className={styles.separator}>
        <SeparatorIcon />
      </div>
      <Button
        classes={styles.button__navigation}
        filled={filledStep >= 0}
        active={currentStep === 1}
        disabled={filledStep < 0}
        onClick={() => {
          dispatch(setCurrentStep(1));
        }}
      >
        Модель
      </Button>
      <div className={styles.separator}>
        <SeparatorIcon />
      </div>
      <Button
        classes={styles.button__navigation}
        filled={filledStep >= 1}
        active={currentStep === 2}
        disabled={filledStep < 1}
        onClick={() => {
          dispatch(setCurrentStep(2));
        }}
      >
        Дополнительно
      </Button>
      <div className={styles.separator}>
        <SeparatorIcon />
      </div>
      <Button
        classes={styles.button__navigation}
        filled={filledStep >= 2}
        active={currentStep === 3}
        disabled={filledStep < 2}
        onClick={() => {
          dispatch(setCurrentStep(3));
        }}
      >
        Итого
      </Button>
    </>
  );
};

export default NavigationOrder;
