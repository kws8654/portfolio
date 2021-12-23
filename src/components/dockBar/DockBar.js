import React from 'react';
import styles from './DockBar.module.css';

function DockBar({ onOffMusic }) {
  return (
    <>
      <div className={styles.dockBar} />
      <div className={styles.dockContent}>
        <a href='https://www.google.com' target='_blank' rel='noreferrer'>
          <img src='./image/chrome.png' className={styles.dockImage} alt='' />
        </a>
        <a href='https://www.discord.com' target='_blank' rel='noreferrer'>
          <img src='./image/discord.png' className={styles.dockImage} alt='' />
        </a>
        <a
          href='https://www.eclipse.org/documentation/'
          target='_blank'
          rel='noreferrer'
        >
          <img src='./image/eclipse.png' className={styles.dockImage} alt='' />
        </a>

        <img
          src='./image/music.png'
          className={styles.dockImage}
          alt=''
          onClick={onOffMusic}
        />

        <a
          href='https://code.visualstudio.com/docs'
          target='_blank'
          rel='noreferrer'
        >
          <img src='./image/vsc.png' className={styles.dockImage} alt='' />
        </a>
        <a href='https://docs.docker.com/' target='_blank' rel='noreferrer'>
          <img src='./image/docker.png' className={styles.dockImage} alt='' />
        </a>
        <a
          href='https://iterm2.com/documentation.html'
          target='_blank'
          rel='noreferrer'
        >
          <img src='./image/terminal.png' className={styles.dockImage} alt='' />
        </a>
        <a
          href='https://humane-louse-035.notion.site/Front-end-Roadmap-d86c1acb191b4badb846ddd50f7ad359'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='./image/notion.png'
            className={styles.dockImage}
            style={{ width: '54px', marginLeft: '60px', marginBottom: '5px' }}
            alt=''
          />
        </a>
        <a href='https://velog.io/@qws3433' target='_blank' rel='noreferrer'>
          <img
            src='./image/velog.png'
            className={styles.dockImage}
            style={{ width: '50px', marginBottom: '8px' }}
            alt=''
          />
        </a>
        <a href='https://github.com/kws8654' target='_blank' rel='noreferrer'>
          <img
            src='./image/git.png'
            className={styles.dockImage}
            style={{ width: '63px' }}
            alt=''
          />
        </a>
      </div>
    </>
  );
}

export default DockBar;
