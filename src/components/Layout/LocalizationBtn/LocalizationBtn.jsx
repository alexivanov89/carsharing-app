import styles from './index.module.scss';
import cn from 'classnames';

const LocalizationBtn = ({ lang, classes }) => {
  return (
    <button className={cn(styles.localizationBtn, classes)} type="button">
      {lang}
    </button>
  );
};

export default LocalizationBtn;
