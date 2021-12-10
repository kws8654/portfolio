import React from 'react';
import styles from './DockBar.module.css';

function DockBar() {
  return (
    <>
      <div className={styles.dockBar} />
      <div className={styles.dockContent}>
        <img src='./image/chrome.png' className={styles.dockImage} alt='' />
        <img src='./image/discord.png' className={styles.dockImage} alt='' />
        <img src='./image/eclipse.png' className={styles.dockImage} alt='' />
        <img src='./image/music.png' className={styles.dockImage} alt='' />
        <img src='./image/vsc.png' className={styles.dockImage} alt='' />
        <img src='./image/docker.png' className={styles.dockImage} alt='' />
        <img src='./image/terminal.png' className={styles.dockImage} alt='' />
        <a href='https://humane-louse-035.notion.site/Front-end-Roadmap-d86c1acb191b4badb846ddd50f7ad359'>
          <img
            src='./image/notion.png'
            className={styles.dockImage}
            style={{ width: '54px', marginLeft: '60px', marginBottom: '5px' }}
            alt=''
          />
        </a>
        <a href='https://velog.io/@qws3433'>
          <img
            src='./image/velog.png'
            className={styles.dockImage}
            style={{ width: '50px', marginBottom: '8px' }}
            alt=''
          />
        </a>
        <a href='https://github.com/kws8654'>
          <img
            src='./image/git.png'
            className={styles.dockImage}
            style={{ width: '53px', marginBottom: '5px' }}
            alt=''
          />
        </a>
      </div>
    </>
  );
}

export default DockBar;
