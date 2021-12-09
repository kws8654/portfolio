import React, { lazy, Suspense } from 'react';
import MiddlePage from '../middlePage/MiddlePage';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './Portfolio2.module.css';

const Content = lazy(() => import('./PF2'));
const Portfolio2 = () => {
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
                <h1>'Pizza House'</h1>
                <p> [ REACT | HTML, CSS, JAVA SCRIPT | FIREBASE ]</p>
              </div>
              <div className={styles.detail}>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>SUMMARY</span>
                  <p>
                    음식 배달 주문 반응형 어플리케이션입니다. 메뉴 리스트와
                    고객주문내역을 Firebase의 Realtime database와 연동하여 저장
                    및 송출됩니다.
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>WHAT I LEARNED </span>
                  <p>
                    - Portal을 이용한 모달 처리 Context, Reducer의 학습 및 활용
                    <br />- UI 컴포넌트(Card, Input, Modal)로 react의 장점인
                    재사용성
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}> SELF REVIEW </span>
                  <p>
                    - 리뷰 보드 추가 <br /> - Cloudinary를 이용하여 메뉴 사진,
                    리뷰 사진 연동 추가
                  </p>
                </div>
              </div>
              <div className={styles.links}>
                <a href='https://github.com/kws8654/order-pizza'>
                  <img src='./image/github.png' alt='' />
                </a>
                <a href='https://kws8654.github.io/order-pizza/'>
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

export default Portfolio2;
