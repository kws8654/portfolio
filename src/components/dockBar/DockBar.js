import React from 'react'
import styles from './DockBar.module.css'

function DockBar() {
    return (
        <>
            <div className={styles.dockBar} />
            <div className={styles.dockContent}>
                <img src="./image/folder1.png" className={styles.dockImage} alt="" />
                <img src="./image/folder2.png" className={styles.dockImage} alt="" />
                <img src="./image/folder3.png" className={styles.dockImage} alt="" />
                <img src="./image/folder4.png" className={styles.dockImage} alt="" />
                <img src="./image/folder5.png" className={styles.dockImage} alt="" />
                <img src="./image/folder6.png" className={styles.dockImage} alt="" />
                <img src="./image/folder7.png" className={styles.dockImage} alt="" />
                <a
                    href="https://humane-louse-035.notion.site/Front-end-Roadmap-d86c1acb191b4badb846ddd50f7ad359"
                >
                    <img
                        src="./image/notion.png"
                        className={styles.dockImage}
                        style={{ width: '55px', marginLeft: '60px', marginBottom: '3px' }}
                        alt=""
                    />
                </a>
                <a href="https://velog.io/@qws3433"
                ><img
                        src="./image/velog.png"
                        className={styles.dockImage}
                        style={{ width: '55px', marginBottom: '3px' }}
                        alt=""
                    />
                </a>
                <a href="https://github.com/kws8654">
                    <img
                        src="./image/git.png"
                        className={styles.dockImage}
                        style={{ width: '55px', marginBottom: '3px' }}
                        alt=""
                    />
                </a>
            </div>
        </>
    )
}

export default DockBar
