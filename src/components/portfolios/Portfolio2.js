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
                <h1>'PIZZA HOUSE'</h1>
                <p> [ REACT | HTML, CSS, JAVASCRIPT | FIREBASE ]</p>
              </div>
              <div className={styles.detail}>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>SUMMARY</span>
                  <p>
                    배달음식 주문 기능의 반응형 어플리케이션입니다. 메뉴
                    리스트와 고객주문내역을 Firebase의 Realtime database와
                    연동하여 Fetch - Post합니다. useState, useEffect외에도
                    portal, context, reducer, ref등 다양한 hook을 활용했습니다.
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>WHAT I LEARNED </span>
                  <p>
                    - Portal을 이용한 모달 처리 <br />
                    - React hook의 Context, Reducer의 적용 <br />- UI
                    컴포넌트(Card, Input, Modal)를 통해 react의 재사용성 극대화
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}> SELF REVIEW </span>
                  <p>
                    - 리뷰 보드 추가 <br /> - Cloudinary를 이용한 메뉴 사진,
                    리뷰 사진 연동 <br /> - Reducer에서 Redux로 전환
                  </p>
                </div>
              </div>
              <div className={styles.links}>
                <a
                  href='https://github.com/kws8654/order-pizza'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./image/github.png' alt='' />
                </a>
                <a
                  href='https://kws8654.github.io/order-pizza/'
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

export default Portfolio2;
