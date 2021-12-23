import React, { lazy, Suspense } from 'react';
import styles from './Portfolio5.module.css';
import MiddlePage from '../middlePage/MiddlePage';
import LoadingSpinner from '../UI/LoadingSpinner';

const Content = lazy(() => import('./PF5'));
const Portfolio5 = () => {
  return (
    <MiddlePage>
      <Suspense fallback={<LoadingSpinner />}>
        <div className={styles.frame}>
          <div className={styles.imageFrame}>
            <Content className={styles.image} />
          </div>
          <div className={styles.descPage}>
            <div className={styles.description}>
              <div className={styles.title}>
                <h1>'PORTFOLIO'</h1>
                <p>[ REACT | HTML, CSS, JAVASCRIPT]</p>
              </div>
              <div className={styles.detail}>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>SUMMARY</span>
                  <p>
                    저의 개인 포트폴리오 웹 사이트입니다. React로 작업했으며
                    실제 랩탑에서 동작하는 모션, 애니메이션, 상호작용을
                    JavaScript와 CSS로 구현했습니다.
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>WHAT I LEARNED </span>
                  <p>
                    - React의 작업, 배포까지의 전반적인 부분 (특히 router, lazy
                    loading, useMemo, useCallback의 사용법과 적용) <br />
                    - React 배포 과정에서 생기는 오류와 해결 <br />
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}> SELF REVIEW </span>
                  <p>
                    - 이미지와 비디오의 로딩속도, 페이지 간 이동 최적화 <br />-
                    더 많은 상호작용 추가 (상단바와 독바)
                  </p>
                </div>
              </div>
              <div className={styles.links}>
                <a
                  href='https://github.com/kws8654/portfolio'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./image/github.png' alt='' />
                </a>
                <a
                  href='https://kws8654.github.io/portfolio/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./image/home.png' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </MiddlePage>
  );
};

export default Portfolio5;
