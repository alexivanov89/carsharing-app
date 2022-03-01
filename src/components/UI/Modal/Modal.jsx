import cn from 'classnames';
import styles from './index.module.scss';

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={cn(styles.modal, {
        [styles.active]: active,
      })}
    >
      <div className={styles.modal__content}>{children}</div>
    </div>
  );
};

export default Modal;
