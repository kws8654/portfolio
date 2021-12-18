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
                <h1>'Card Diary'</h1>
                <p>
                  {' '}
                  [ REACT | HTML, CSS, JAVA SCRIPT | FIREBASE | CLOUDINARY ]
                </p>
              </div>
              <div className={styles.detail}>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>SUMMARY</span>
                  <p>
                    간단한 카드 형식의 일기를 쓰고 보관할 수 있는
                    어플리케이션입니다. Firebase의 authentication으로 Google,
                    Git hub 로그인 기능과 로그인 된 계정의 database 연동을 통해
                    작성된 일기가 저장되고 보여집니다.
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>WHAT I LEARNED </span>
                  <p>
                    - 실시간 Database Sync의 적용 <br />- Custom CSS의 설정과
                    활용
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}> SELF REVIEW </span>
                  <p>
                    - 카드 스타일 커스터마이징 옵션 추가
                    <br />- 연간, 월간, 주간 별 필터링 기능 추가
                  </p>
                </div>
              </div>
              <div className={styles.links}>
                <a href='https://github.com/kws8654/card-diary'>
                  <img src='./image/github.png' alt='' />
                </a>
                <a href='https://business-card-2173b.web.app/#/'>
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
