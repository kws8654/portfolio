import React from 'react';
import MiddlePage from '../middlePage/MiddlePage';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <MiddlePage>
      <div className={styles.frame}>
        <div className={styles.ldSpinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </MiddlePage>
  );
};

export default LoadingSpinner;
