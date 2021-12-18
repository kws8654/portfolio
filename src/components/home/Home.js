import React, { useRef, useEffect, useState, lazy, Suspense } from 'react';
import styles from './Home.module.css';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';

const FaceTimeVideo = lazy(() => import('./FaceTimeVideo'));
function Home({ isClickedMusic, isClickedKakao }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  let history = useHistory();

  function pushPF1() {
    history.push('/portfolio1');
  }

  function pushPF2() {
    history.push('/portfolio2');
  }

  function pushPF3() {
    history.push('/portfolio3');
  }

  function pushPF4() {
    history.push('/portfolio4');
  }

  function pushPF5() {
    history.push('/portfolio5');
  }

  function pushPF6() {
    history.push('/portfolio6');
  }

  const container = useRef();
  const box = useRef();
  const box2 = useRef();

  useEffect(() => {
    const { width: containerWidth, height: containerHeight } =
      container.current.getBoundingClientRect();
    const { width: boxWidth, height: boxHeight } =
      box.current.getBoundingClientRect();
    const { width: box2Width, height: box2Height } =
      box2.current.getBoundingClientRect();

    let isDragging = null;
    let originLeft = null;
    let originTop = null;
    let originX = null;
    let originY = null;

    let isDragging2 = null;
    let originLeft2 = null;
    let originTop2 = null;
    let originX2 = null;
    let originY2 = null;

    box.current.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging = true;
      originX = e.clientX;
      originY = e.clientY;
      originLeft = box.current.offsetLeft;
      originTop = box.current.offsetTop;
    });

    document.addEventListener('mouseup', (e) => {
      isDragging = false;
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY;
        const endOfXPoint = containerWidth - boxWidth;
        const endOfYPoint = containerHeight - boxHeight;
        box.current.style.left = `${Math.min(
          Math.max(0, originLeft + diffX),
          endOfXPoint
        )}px`;
        box.current.style.top = `${Math.min(
          Math.max(0, originTop + diffY),
          endOfYPoint
        )}px`;
      }
    });

    box2.current.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging2 = true;
      originX2 = e.clientX;
      originY2 = e.clientY;
      originLeft2 = box2.current.offsetLeft;
      originTop2 = box2.current.offsetTop;
    });

    document.addEventListener('mouseup', (e) => {
      isDragging2 = false;
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging2) {
        const diffX2 = e.clientX - originX2;
        const diffY2 = e.clientY - originY2;
        const endOfXPoint2 = containerWidth - box2Width;
        const endOfYPoint2 = containerHeight - box2Height;
        box2.current.style.left = `${Math.min(
          Math.max(0, originLeft2 + diffX2),
          endOfXPoint2
        )}px`;
        box2.current.style.top = `${Math.min(
          Math.max(0, originTop2 + diffY2),
          endOfYPoint2
        )}px`;
      }
    });
  }, [box, box2, container]);

  return (
    <div className={styles.home} ref={container}>
      <figure>
        <img
          src='./image/pf1.png'
          className={styles.file}
          alt=''
          onClick={pushPF1}
        />
        <figcaption>portfolio 1</figcaption>
      </figure>
      <figure>
        <img
          src='./image/pf2.png'
          className={styles.file}
          alt=''
          onClick={pushPF2}
        />
        <figcaption>portfolio 2</figcaption>
      </figure>

      <figure>
        <img
          src='./image/pf3.png'
          className={styles.file}
          alt=''
          onClick={pushPF3}
        />
        <figcaption>portfolio 3</figcaption>
      </figure>
      <figure>
        <img
          src='./image/pf4.png'
          className={styles.file}
          alt=''
          onClick={pushPF4}
        />
        <figcaption>portfolio 4</figcaption>
      </figure>
      <div className={styles.file2ndLine}>
        <figure>
          <img
            src='./image/pf5.png'
            className={styles.file2nd}
            alt=''
            onClick={pushPF5}
          />
          <figcaption>portfolio 5</figcaption>
        </figure>
        <figure>
          <img
            src='./image/pf6.png'
            className={styles.file2nd}
            alt=''
            onClick={pushPF6}
          />
          <figcaption>portfolio 6</figcaption>
        </figure>
      </div>
      <div className={styles.memo} ref={box}>
        <div className={styles.memoTitle}>
          <button className={styles.red}></button>
          <button className={styles.yellow}></button>
          <button className={styles.green}></button>
          <strong>
            <span
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              Resume
            </span>
          </strong>
        </div>

        <div className={styles.memoContent}>
          <strong style={{ fontSize: '20px' }}> Wonsub Kim, 김원섭 </strong>
          <br />
          <br />
          📞 010-6225-8*** <br />
          📧
          <a href='mailto: raykim.dev@gmail.com?subject=We want to contact with you, RAY!'>
            raykim.dev@gmail.com
          </a>
          <p>
            Han-yang University _ Architecture (13.03 - 13.07)
            <br />
            Sang-myung University _ Scenography (15.03 - 21.02)
          </p>
          <p>
            ✔️ Java <br />
            ✔️ JavaScript, jQuery <br />
            ✔️ React.js, Redux, TypeScript <br />
            ✔️ Oracle, MongoDB, Firebase <br />
          </p>
          <p>
            ✅ TOEIC 905 <br />
            ✅ TOEIC SPEAKING Lv.6 <br />
            ✅ OPIC IH <br />✅ 정보처리기사 필기합격
          </p>
        </div>
      </div>
      <div className={styles.faceTime} ref={box2}>
        <div className={styles.faceTimeBar}>
          <button className={styles.red}></button>
          <button className={styles.yellow}></button>
          <button className={styles.green}></button>
          <strong>
            <span
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              Facetime
            </span>
          </strong>
        </div>
        <div>
          <Suspense fallback={LoadingSpinner}>
            <FaceTimeVideo />
          </Suspense>
        </div>
      </div>
      <div className={styles.alret} style={{ display: isClicked && 'none' }}>
        <p style={{ fontWeight: 'bold' }}>알림</p>
        <p>NICE TO MEET YOU STRANGER :)</p>
        <p
          className={styles.xButton}
          onClick={() => {
            setIsClicked(true);
          }}
        >
          x
        </p>
      </div>
      <div
        className={styles.alret2}
        style={{ display: isClicked2 && 'none', top: isClicked && '50px' }}
      >
        <p style={{ fontWeight: 'bold' }}>중요 알림</p>
        <p>
          You can <span style={{ color: 'red' }}>drag</span> and
          <span style={{ color: 'red' }}> move</span> SOMETHING
        </p>
        <p
          className={styles.xButton}
          onClick={() => {
            setIsClicked2(true);
          }}
        >
          x
        </p>
      </div>
      <div
        className={styles.music}
        style={{ display: isClickedMusic ? 'block' : 'none' }}
      >
        <audio src='./image/audio.mp3' type='audio/mp3' controls loop />
      </div>
      <div
        className={styles.kakaoFrame}
        style={{ display: isClickedKakao ? 'block' : 'none' }}
      >
        <div className={styles.kakaoPop} />
        <img className={styles.kakaoQR} src='./image/kakaoQR.jpg' alt='' />
      </div>
    </div>
  );
}
export default Home;
