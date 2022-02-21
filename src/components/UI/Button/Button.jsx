import cn from 'classnames';
import styles from './index.module.scss';

const Button = ({ children, classes, onClick }) => {
  return (
    <button className={cn(styles.button, classes)} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
