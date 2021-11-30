import React, { useHistory } from 'react';
import MiddlePage from '../middlePage/MiddlePage';
import styles from './Portfolio1.module.css';

const Portfolio1 = () => {
  return (
    <MiddlePage>
      <div className={styles.frame}>
        <div className={styles.imageFrame}>
          <img className={styles.image} src='/image/rec1.png' alt='' />
        </div>
        <div className={styles.descPage}>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>'TURNTABLE'</h1>
            </div>
            <div className={styles.detail}>
              <p>
                노래를 하는 순간에도 이 무대가 끝이 나는 게 아쉽다며 배우는
                고개를 저었다. 빅토르 위고의 동명 소설(1831)을 무대로 옮긴
                뮤지컬 ‘노트르담 드 파리’ 프렌치 오리지널 내한 공연에서 근위대장
                페뷔스를 연기하는 잔 마르코 스키아레티(35) 얘기다. 극의 상징적
                인물인 콰지모도 역의 안젤로 델 베키오(29)도 “10년간 같은 역할을
                했어도 이제 막 시작한 느낌이 든다”며 거들었다. 형태는 각기
                다르지만 영원하고 변하지 않길 바라는 사랑을 노래하는 극 중
                인물처럼 두 배우는 작품을 향한 사랑을 아낌 없이 드러냈다.
              </p>
              <p>
                노래를 하는 순간에도 이 무대가 끝이 나는 게 아쉽다며 배우는
                고개를 저었다. 빅토르 위고의 동명 소설(1831)을 무대로 옮긴
                뮤지컬 ‘노트르담 드 파리’ 프렌치 오리지널 내한 공연에서 근위대장
                페뷔스를 연기하는 잔 마르코 스키아레티(35) 얘기다. 극의 상징적
                인물인 콰지모도 역의 안젤로 델 베키오(29)도 “10년간 같은 역할을
                했어도 이제 막 시작한 느낌이 든다”며 거들었다. 형태는 각기
                다르지만 영원하고 변하지 않길 바라는 사랑을 노래하는 극 중
                인물처럼 두 배우는 작품을 향한 사랑을 아낌 없이 드러냈다.
              </p>
              <p>
                노래를 하는 순간에도 이 무대가 끝이 나는 게 아쉽다며 배우는
                고개를 저었다. 빅토르 위고의 동명 소설(1831)을 무대로 옮긴
                뮤지컬 ‘노트르담 드 파리’ 프렌치 오리지널 내한 공연에서 근위대장
                페뷔스를 연기하는 잔 마르코 스키아레티(35) 얘기다. 극의 상징적
                인물인 콰지모도 역의 안젤로 델 베키오(29)도 “10년간 같은 역할을
                했어도 이제 막 시작한 느낌이 든다”며 거들었다. 형태는 각기
                다르지만 영원하고 변하지 않길 바라는 사랑을 노래하는 극 중
                인물처럼 두 배우는 작품을 향한 사랑을 아낌 없이 드러냈다.
              </p>
            </div>
          </div>
          <div className={styles.links}>
            <a href='https://github.com/kws8654/portfolio'>
              <img src='/image/rec1.png' alt='' />
            </a>
            <a href='http://kws8654.dothome.co.kr/turntable/'>
              <img src='/image/rec1.png' alt='' />
            </a>
            <a href='http://kws8654.dothome.co.kr/portfolio/turntable/'>
              <img src='/image/rec1.png' alt='' />
            </a>
          </div>
        </div>
      </div>
    </MiddlePage>
  );
};

export default Portfolio1;
