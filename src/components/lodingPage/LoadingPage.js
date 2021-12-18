import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import styles from './LoadingPage.module.css';
import Navbar from '../navBar/NavBar';

const LoadingPage = () => {
  const [isClickedCss, setIsClickedCss] = useState(false);
  const [isClickedHome, setIsClickedHome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [mainText, setMainText] = useState([
    '안녕하세요',
    'Hello',
    'こんにちは',
    'Hola!',
    '你好',
    'Adiós',
    'Bonjour',
    'مرحبًا',
    'Guten Tag',
  ]);
  const [index, setIndex] = useState(0);

  const guestNum = Math.floor(Math.random() * 100);
  const startUp = useRef();
  let history = useHistory();

  function pushMain() {
    history.push('/main');
  }
  useEffect(() => {
    setInterval(() => {
      setIndex((index) => index + 1);
    }, 5000);
  }, []);

  const cssClass = [styles.macBook, isClickedCss && styles.macRotate];
  const start = () => {
    setIsClickedCss(true);
    setTimeout(function () {
      setIsClickedHome(false);
      startUp.current.play();
    }, 3000);
    setTimeout(function () {
      setIsLoading(false);
    }, 8000);
  };

  return (
    <>
      {isClickedHome ? (
        <>
          <img
            className={cssClass.join(' ')}
            onClick={start}
            src='./image/macMonitor2.png'
            alt=''
          />
          <img
            className={styles.macBar}
            onClick={start}
            src='./image/macBar2.png'
            alt=''
          />
          <div
            className={styles.mainText}
            style={{ display: isClickedCss && 'none' }}
          >
            {mainText[`${index}`]}
          </div>
          <img
            className={styles.onButton}
            onClick={start}
            style={{ display: isClickedCss && 'none' }}
            src='./image/powerOn.png'
            alt=''
          ></img>
        </>
      ) : (
        <div className={styles.motherFrame}>
          {isLoading ? (
            <div className={styles.loadingFrame}>
              <img className={styles.logo} src='./image/apple.png' alt='' />
              <div className={styles.loadingBar}></div>
              <p>
                Sorry! It's not a Responsive Web Design. <br />
              </p>
            </div>
          ) : (
            <>
              <Navbar />
              <div className={styles.loginFrame}>
                <div className={styles.login}>
                  <img
                    className={styles.porfileImg}
                    src='./image/profile.png'
                    alt=''
                  />
                  <div style={{ fontWeight: 'bold' }}>Guest {guestNum}</div>
                  <form onSubmit={pushMain}>
                    <input
                      className={styles.password}
                      type='password'
                      placeholder='  암호 입력'
                    />
                  </form>
                  <div
                    style={{ fontSize: '13px', color: 'gray', margin: '5px' }}
                  >
                    TYPE ANY LETTERS
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      <audio src='./image/startUp.mp3' ref={startUp} />
    </>
  );
};

export default LoadingPage;
