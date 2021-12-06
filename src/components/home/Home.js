import React, { useRef, useEffect, useState } from 'react';
import styles from './Home.module.css';
import { useHistory } from 'react-router-dom';

function Home() {
  const [isClicked, setIsClicked] = useState(false);
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

  const hideAlret = () => {
    setIsClicked(true);
  };

  return (
    <div className={styles.home} ref={container}>
      <figure>
        <img
          // src='./image/chrome.png'
          src='./image/generic.png'
          className={styles.file}
          alt=''
          onClick={pushPF1}
        />
        <figcaption>portfolio 1</figcaption>
      </figure>
      <figure>
        <img
          // src='./image/eclipse.png'
          src='./image/generic.png'
          className={styles.file}
          alt=''
          onClick={pushPF2}
        />
        <figcaption>portfolio 2</figcaption>
      </figure>

      <figure>
        <img
          // src='./image/safari.png'
          src='./image/generic.png'
          className={styles.file}
          alt=''
          onClick={pushPF3}
        />
        <figcaption>portfolio 3</figcaption>
      </figure>
      <figure>
        <img
          // src='./image/vsc.png'
          src='./image/generic.png'
          className={styles.file}
          alt=''
          onClick={pushPF4}
        />
        <figcaption>portfolio 4</figcaption>
      </figure>
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
          📞 010-6225-**** <br />
          📧 raykim.dev@gmail.com
          <p>
            Han-yang University _ Architecture (13.03 - 13.07)
            <br />
            Sang-myung University _ Stage Design (15.03 - 21.02)
          </p>
          <p>
            ✔️ Java <br />
            ✔️ Java Script <br />
            ✔️ React.js <br />
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
          <video
            src='./image/facetime.mp4'
            width='300px'
            heigth='200px'
            autoPlay
            muted
            loop
            style={{ position: 'absolute', right: '50px' }}
          />
        </div>
      </div>
      <div className={styles.alret} style={{ display: isClicked && 'none' }}>
        <p style={{ fontWeight: 'bold' }}>알림</p>
        <p>NICE TO MEET YOU STRANGER :)</p>
        <p className={styles.xButton} onClick={hideAlret}>
          x
        </p>
      </div>
      <div className={styles.alret2}>
        <p style={{ fontWeight: 'bold' }}>중요 알림</p>
        <p>
          You can <span style={{ color: 'red' }}>drag</span> and
          <span style={{ color: 'red' }}> move</span> SOMETHING
        </p>
        <p className={styles.xButton}>x</p>
      </div>
    </div>
  );
}
export default Home;