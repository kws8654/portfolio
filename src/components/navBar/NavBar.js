import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';

function NavBar({ onOffKakaoQR }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const clock = () => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const week = ['일', '월', '화', '수', '목', '금', '토'];
      const hours = time.getHours();
      const minutes = time.getMinutes();
      setTime(
        `${month + 1}월 ${date}일 (${week[day]}) ` +
          `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`,
      );
    };
    clock();
    setInterval(clock, 1000);

    return () => {
      clearInterval(clock());
    };
  }, []);

  return (
    <div className={styles.navBar}>
      <span>
        <img src='./image/logo.png' className={styles.navBarIcon} alt='' />
      </span>
      <span className='option'>
        <span className={styles.navBarText}>
          <strong>Wonsub's Portfolio</strong>
        </span>
        <span className={styles.navBarText}>파일</span>
        <span className={styles.navBarText}>편집</span>
        <span className={styles.navBarText}>보기</span>
        <span className={styles.navBarText}>이동</span>
        <span className={styles.navBarText}>도움말</span>
      </span>
      <span className={styles.system}>
        <img
          src='./image/kakaotalk.png'
          className={styles.navBarSystemIcon}
          style={{ width: '16px' }}
          alt=''
          onClick={onOffKakaoQR}
        />
        <img src='./image/internet.png' className={styles.navBarSystemIcon} style={{ width: '14px' }} alt='' />
        <img src='./image/battery.png' className={styles.navBarSystemIcon} style={{ width: '20px' }} alt='' />
        <img src='./image/wifi.png' className={styles.navBarSystemIcon} style={{ width: '18px' }} alt='' />
        <img src='./image/magnifier.png' className={styles.navBarSystemIcon} style={{ width: '14px' }} alt='' />
        <img src='./image/toggle.png' className={styles.navBarSystemIcon} style={{ width: '14px' }} alt='' />
        <strong>
          <span className={styles.clock}>{time}</span>
        </strong>
      </span>
    </div>
  );
}

export default NavBar;
