import Button from '../../../components/UI/Button/Button';
import styles from '../index.module.scss';

export const renderButton = (step, onSteps) => {
  const { onStep0, onStep1, onStep2, onStep3 } = onSteps;

  switch (step) {
    case 0:
      return (
        <Button
          classes={styles.orderInfo__button}
          disabled={onStep0.disabled}
          onClick={onStep0.onClick}
        >
          Выбрать модель
        </Button>
      );
    case 1:
      return (
        <Button
          classes={styles.orderInfo__button}
          onClick={onStep1.onClick}
          disabled={onStep1.disabled}
        >
          Дополнительно
        </Button>
      );
    case 2:
      return (
        <Button
          classes={styles.orderInfo__button}
          onClick={onStep2.onClick}
          disabled={onStep2.disabled}
        >
          Итого
        </Button>
      );
    case 3:
      return (
        <Button classes={styles.orderInfo__button} onClick={onStep3.onClick}>
          Заказать
        </Button>
      );
    default:
      return <></>;
  }
};
