import React from 'react';
import styles from './Portfolio6.module.css';
import MiddlePage from '../middlePage/MiddlePage';

const Portfolio6 = () => {
  return (
    <MiddlePage>
      <div className={styles.frame}>
        <div className={styles.descPage}>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>'MINI PROJECT & CLONE'</h1>
            </div>
            <div className={styles.portfolios}>
              <div className={styles.detail}>
                <div className={styles.detailContent}>
                  <img src='./image/accountBook.png' alt='' />
                </div>
                <h1>ACCOUNT BOOK</h1>
                <div className={styles.links}>
                  <a href='https://github.com/kws8654/-account-book'>
                    <img src='./image/github.png' alt='' />
                  </a>
                  <a href='https://kws8654.github.io/-account-book/'>
                    <img src='./image/home.png' alt='' />
                  </a>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailContent}>
                  <img src='./image/weatherAPI.png' alt='' />
                </div>
                <h1>WEATHER APPLICATION</h1>
                <div className={styles.links}>
                  <a href='https://github.com/kws8654/my-lp-list'>
                    <img src='./image/github.png' alt='' />
                  </a>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailContent}>
                  <img src='./image/shopping.png' alt='' />
                </div>
                <h1>SHOPPING APPLICATION</h1>
                <div className={styles.links}>
                  <a href='https://github.com/kws8654/react-node-onlineStore'>
                    <img src='./image/github.png' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MiddlePage>
  );
};

export default Portfolio6;
