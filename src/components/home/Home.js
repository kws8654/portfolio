import React, { useRef, useEffect } from 'react'
import styles from './Home.module.css'

function Home() {

    const container = useRef();
    const box = useRef();
    const box2 = useRef();


    useEffect(() => {
        const { width: containerWidth, height: containerHeight } = container.current.getBoundingClientRect();
        const { width: boxWidth, height: boxHeight } = box.current.getBoundingClientRect();
        const { width: box2Width, height: box2Height } = box2.current.getBoundingClientRect();

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

        box.current.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isDragging = true;
            originX = e.clientX;
            originY = e.clientY;
            originLeft = box.current.offsetLeft;
            originTop = box.current.offsetTop;
        });

        document.addEventListener("mouseup", (e) => {
            isDragging = false;
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                const diffX = e.clientX - originX;
                const diffY = e.clientY - originY;
                const endOfXPoint = containerWidth - boxWidth;
                const endOfYPoint = containerHeight - boxHeight;
                box.current.style.left = `${Math.min(Math.max(0, originLeft + diffX), endOfXPoint)}px`;
                box.current.style.top = `${Math.min(Math.max(0, originTop + diffY), endOfYPoint)}px`;
            }
        });

        box2.current.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isDragging2 = true;
            originX2 = e.clientX;
            originY2 = e.clientY;
            originLeft2 = box2.current.offsetLeft;
            originTop2 = box2.current.offsetTop;
        });

        document.addEventListener("mouseup", (e) => {
            isDragging2 = false;
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging2) {
                const diffX2 = e.clientX - originX2;
                const diffY2 = e.clientY - originY2;
                const endOfXPoint2 = containerWidth - box2Width;
                const endOfYPoint2 = containerHeight - box2Height;
                box2.current.style.left = `${Math.min(Math.max(0, originLeft2 + diffX2), endOfXPoint2)}px`;
                box2.current.style.top = `${Math.min(Math.max(0, originTop2 + diffY2), endOfYPoint2)}px`;
            }
        });
    }, [box, box2, container]);

    return (
        <div className={styles.home} ref={container}>
            <figure>
                <a href="http://kws8654.dothome.co.kr/portfolio/turntable/">
                    <img src="./image/chrome.png" className={styles.file} alt='' />
                </a>
                <figcaption style={{ marginLeft: '19px', color: 'white' }}>
                    portfolio 1
                </figcaption>
            </figure>
            <figure>
                <a href="http://kws8654.dothome.co.kr/portfolio/oldversion/">
                    <img src="./image/eclipse.png" className={styles.file} alt='' />
                </a>
                <figcaption style={{ marginLeft: '19px', color: 'white' }}>
                    portfolio 2
                </figcaption>
            </figure>
            <figure>
                <a href="http://kws8654.dothome.co.kr/portfolio/">
                    <img src="./image/safari.png" className={styles.file} alt='' />
                </a>
                <figcaption style={{ marginLeft: '19px', color: 'white' }}>
                    portfolio 3
                </figcaption>
            </figure >
            <figure>
                <a href="http://kws8654.dothome.co.kr/portfolio/">
                    <img src="./image/vsc.png" className={styles.file} alt='' />
                </a>
                <figcaption style={{ marginLeft: '19px', color: 'white' }}>
                    portfolio 4
                </figcaption>
            </figure >
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
                                transform: 'translateX(-50%)'
                            }}
                        >Resume</span
                        ></strong
                    >
                </div>
                <div className={styles.memoContent}>
                    <strong style={{ fontSize: '20px' }}> Wonsub Kim, 김원섭 </strong>
                    <br />
                    <br />
                    📞 010-6225-8654 <br />
                    📧 kws8654@gmail.com
                    <p>
                        Han-yang University _ Architecture (13.03 - 13. ç07)<br />
                        Sang-myung University _ Stage Design (15.03 - 21.02)
                    </p>
                    <p>
                        ✔️ Java <br />
                        ✔️ Java Script <br />
                        ✔️ Oracle <br />
                        ✔️ React
                    </p>
                    <p>
                        ✅ TOEIC 905 <br />
                        ✅ TOEIC SPEAKING Lv.6 <br />
                        ✅ OPIC IH <br />
                        ✅ 정보처리기사 필기합격
                    </p>
                </div>
            </div>
            <div className={styles.faceTime} ref={box2}>
                <div className={styles.faceTimeBar}>
                    <button className={styles.red}></button>
                    <button className={styles.yellow}></button>
                    <button className={styles.green}></button>
                    <strong
                    ><span
                        style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                    >Facetime</span
                        ></strong
                    >
                </div>
                <div>
                    <video
                        src="./image/facetime.mp4"
                        width="300px"
                        heigth="200px"
                        autoPlay
                        muted
                        loop
                        style={{ position: 'absolute', right: '50px' }}
                    />
                </div>
            </div>
        </div>
    )
}
export default Home;