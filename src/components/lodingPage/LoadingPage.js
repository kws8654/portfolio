import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './LoadingPage.module.css';
import Navbar from '../navBar/NavBar';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const guestNum = Math.floor(Math.random() * 100);

  let history = useHistory();

  setTimeout(function () {
    setIsLoading(false);
  }, 5000);

  function pushMain() {
    history.push('/main');
  }

  return (
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
              <div style={{ fontSize: '13px', color: 'gray', margin: '5px' }}>
                TYPE ANY LETTERS
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoadingPage;
