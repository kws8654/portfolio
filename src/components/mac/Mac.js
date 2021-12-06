import React from 'react';
import DockBar from '../dockBar/DockBar';
import Home from '../home/Home';
import NavBar from '../navBar/NavBar';
import styles from './Mac.module.css';

function Mac() {
  return (
    <div className={styles.mac}>
      <NavBar />
      <Home />
      <DockBar />
      <img className={styles.background} src='./image/10-13.jpeg' alt='' />
    </div>
  );
}

export default Mac;
