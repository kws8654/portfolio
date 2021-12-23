import React, { lazy, Suspense } from 'react';
import MiddlePage from '../middlePage/MiddlePage';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './Portfolio3.module.css';

const Content = lazy(() => import('./PF3'));
const Portfolio3 = () => {
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
                <h1>'TURN MY LP'</h1>
                <p> [ HTML | CSS | JAVA SCRIPT | JQUERY ]</p>
              </div>
              <div className={styles.detail}>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>SUMMARY</span>
                  <p>
                    사용자가 재생, 정지, 곡 이동을 할 수 있는 오디오
                    컨트롤러입니다. 턴 테이블의 모든 요소를 CSS로 구현하고
                    톤암의 움직임, lp 회전 애니메이션을 추가하여 실제 턴테이블의
                    상호작용을 재현했습니다.
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}>WHAT I LEARNED </span>
                  <p>
                    - CSS 전반적인 부분 (특히 before_after, z-index, animation,
                    keyframes) <br />- QuerySelector와 Attribute의 불러오기와
                    변형을 통한
                  </p>
                </div>
                <div className={styles.subDetail}>
                  <span className={styles.subTitle}> SELF REVIEW </span>
                  <p>
                    - LP 이미지와 노래의 변환 코드를 좀 더 소프트하게 만들기
                    <br />- CSS 코드 정리
                  </p>
                </div>
              </div>
              <div className={styles.links}>
                <a
                  href='https://github.com/kws8654/my-lp-list'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./image/github.png' alt='' />
                </a>
                <a
                  href='https://kws8654.github.io/my-lp-list/'
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

export default Portfolio3;
