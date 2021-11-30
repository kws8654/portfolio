import React from 'react';
import NavBar from '../navBar/NavBar';
import styles from './MiddlePage.module.css';

const MiddlePage = (props) => {
  return (
    <div className={styles.frame}>
      <NavBar />
      {props.children}
    </div>
  );
};

export default MiddlePage;
