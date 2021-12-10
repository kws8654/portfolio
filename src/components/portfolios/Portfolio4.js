import React, { lazy, Suspense } from 'react';
import MiddlePage from '../middlePage/MiddlePage';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './Portfolio4.module.css';

const Content = lazy(() => import('./PF1'));
const Portfolio4 = () => {
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
                <p>
                  {' '}
                  [ REACT | HTML, CSS, JAVA SCRIPT | FIREBASE | CLOUDINARY ]
                </p>
              </div>
              <div className={styles.detail}>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>SUMMARY</span>
                  <p>
                    사용자가 재생, 정지, 곡 이동을 할 수 있는 오디오
                    컨트롤러입니다. 턴 테이블과 LP를 컨셉으로 톤암의 움직임,
                    lp의 회전 애니메이션을 추가하여 각 액션을 시각적으로
                    보이도록 했습니다. lp판을 제외한 모든 컴포넌트를 css로
                    구현했습니다.
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>WHAT I LEARNED </span>
                  <p>
                    CSS의 전반적인 부분을 공부할 수 있었으며 특히 before-after,
                    z-index, animation, keyframes를 깊이 있게 공부했습니다.
                    Jqeury와 Java script의 qeurySelector, attribute 속성을
                    자유롭게 다룰 수 있다
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}> SELF REVIEW </span>
                  <p>
                    음악파일과 노래 제목을 변경하는 기능에 있어 더 소프트 코딩의
                    여지가 있다. BPM 조절, Volume조절 기능의 추가
                  </p>
                </div>
              </div>
              <div className={styles.links}>
                <a href='https://github.com/kws8654/portfolio'>
                  <img src='./image/github.png' alt='' />
                </a>
                <a href='https://kws8654.github.io/portfolio/'>
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

export default Portfolio4;
