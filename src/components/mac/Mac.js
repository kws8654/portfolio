import React, { useState } from 'react';
import DockBar from '../dockBar/DockBar';
import Home from '../home/Home';
import NavBar from '../navBar/NavBar';
import styles from './Mac.module.css';

function Mac() {
  const [isClickedMusic, setIsClickedMusic] = useState(false);
  const [isClickedKakao, setIsClickedKakao] = useState(false);

  const onOffMusic = () => {
    isClickedMusic ? setIsClickedMusic(false) : setIsClickedMusic(true);
  };

  const onOffKakaoQR = () => {
    isClickedKakao ? setIsClickedKakao(false) : setIsClickedKakao(true);
  };

  return (
    <div className={styles.mac}>
      <NavBar onOffKakaoQR={onOffKakaoQR} />
      <Home isClickedMusic={isClickedMusic} isClickedKakao={isClickedKakao} />
      <DockBar onOffMusic={onOffMusic} />
      <img className={styles.background} src='./image/10-13.jpeg' alt='' />
    </div>
  );
}

export default Mac;
