import cn from 'classnames';
import styles from './index.module.scss';

const Button = ({ children, classes, onClick, active, filled, disabled }) => {
  return (
    <button
      id="btn"
      className={cn(styles.button, classes, {
        [styles.filled]: filled,
        [styles.active]: active,
      })}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
