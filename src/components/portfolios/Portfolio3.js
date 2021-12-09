import React, { lazy, Suspense } from 'react';
import MiddlePage from '../middlePage/MiddlePage';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './Portfolio3.module.css';

const Content = lazy(() => import('./PF3'));
const Portfolio3 = () => {
  return (
    <MiddlePage>
      <div className={styles.frame}>
        <div className={styles.imageFrame}>
          <Suspense fallback={<LoadingSpinner />}>
            <Content className={styles.image} />
          </Suspense>
        </div>
        <div className={styles.descPage}>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>'Flip Page'</h1>
              <p> [ REACT | HTML, CSS, JAVA SCRIPT | REST API ]</p>
            </div>
            <div className={styles.detail}>
              <div className={styles.subDetail}>
                <span className={styles.subTitle}>SUMMARY</span>
                <p>
                  날씨정보와 시각, todolist 기능을 가진 반응형 웹
                  어플리케이션입니다. OpenWeatherAPI에서 날씨정보를 가져오며
                  카드 뒷면에서 원하는 도시를 설정할 수 있습니다. 온도와 날씨에
                  따라 폰트 색상이 변하는 기능을 추가했습니다.
                </p>
              </div>
              <div className={styles.subDetail}>
                <span className={styles.subTitle}>WHAT I LEARNED </span>
                <p>
                  - API Fetch, 오류처리 학습
                  <br />- UseState, UseEffect을 스스로 활용
                </p>
              </div>
              <div className={styles.subDetail}>
                <span className={styles.subTitle}> SELF REVIEW </span>
                <p>
                  - 세부 날씨 정보(일기예보, 풍량, 습도) 추가 예정
                  <br />- 한글로 검색할 수 있도록 변경
                </p>
              </div>
            </div>
            <div className={styles.links}>
              <a href='https://github.com/kws8654/flip-page'>
                <img src='./image/github.png' alt='' />
              </a>
              <a href='https://kws8654.github.io/flip-page/'>
                <img src='./image/home.png' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </MiddlePage>
  );
};

export default Portfolio3;
