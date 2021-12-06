import React from 'react';
import MiddlePage from '../middlePage/MiddlePage';
import styles from './Portfolio1.module.css';

const Portfolio1 = () => {
  return (
    <MiddlePage>
      <div className={styles.frame}>
        <div className={styles.imageFrame}>
          <video
            className={styles.image}
            src='./image/PF1.mov'
            alt=''
            autoPlay
            loop
          />
        </div>
        <div className={styles.descPage}>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>'My Lp List'</h1>
            </div>
            <div className={styles.detail}>
              <p>
                summary <br />
                사용자가 재생, 정지, 곡 이동을 할 수 있는 음악 컨트롤러입니다.
                턴테이블과 LP판을 컨셉으로 톤암의 움직임, lp의 회전 애니메이션을
                추가하여 사용자가 시각적으로 재미를 느끼도록 했습니다. lp판을
                제외한 모든 컴포넌트를 css로 구현했습니다.
              </p>
              <p>
                what I learned from this <br />
                CSS의 전반적인 부분을 훈련할 수 있었으며 특히 before-after,
                z-index, animation, keyframes를 깊이 있게 공부했습니다. Jqeury와
                Java script의 qeurySelector, attribute 속성을 자유롭게 다룰 수
                있다
              </p>
              <p>
                self-review <br />
                음악파일과 노래 제목을 변경하는 기능에 있어 더 소프트 코딩의
                여지가 있다.
              </p>
            </div>
          </div>
          <div className={styles.links}>
            <a href='https://github.com/kws8654/portfolio'>
              <img src='./image/rec1.png' alt='' />
            </a>
            <a href='http://kws8654.dothome.co.kr/myLpList/'>
              <img src='./image/rec1.png' alt='' />
            </a>
            <a href='http://kws8654.dothome.co.kr/portfolio/turntable/'>
              <img src='./image/rec1.png' alt='' />
            </a>
          </div>
        </div>
      </div>
    </MiddlePage>
  );
};

export default Portfolio1;
