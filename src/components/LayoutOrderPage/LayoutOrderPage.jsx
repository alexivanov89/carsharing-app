import React from 'react';
import styles from './index.module.scss';

const LayoutOrderPage = ({ header, mainField, asideField }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header__page}>
        <div className={styles.wrapper__header}>{header}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainField}>{mainField}</div>
        <div className={styles.asideField}>{asideField}</div>
      </div>
    </div>
  );
};

export default LayoutOrderPage;
