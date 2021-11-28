import React, { useState } from 'react'
import $ from 'jquery';
import NavBar from '../navBar/NavBar'
import styles from './TurnTable.module.css'


function TurnTable() {

    // $(".startstop").click(function () {
    //     $(this).toggleClass("active");
    //     $('.turntable').toggleClass("active");
    // });

    // $(".startstop").click(function () {
    //     $(this).toggleClass("active");
    //     $('.rec').toggleClass("active");
    // });


    const [index, setIndex] = useState(1);

    const handleNextImage = () => {
        setIndex((val) => (val === 4 ? 1 : val + 1));
        console.log(index)
    };

    const handlePrevImage = () => {
        setIndex((val) => (val === 1 ? 4 : val - 1));
    };


    // var num = 1;
    // function nextLp(index) {
    //     // var image = document.querySelector(".styles.rec");
    //     // var audio = document.querySelector(".styles.audioPlay");
    //     // let rec = document.querySelector(".rec").getAttribute('src');
    //     // let title = document.querySelector(".styles.console");

    //     if (index) {
    //         if (num == 4) return;
    //         num++;
    //     } else {
    //         if (num == 1) return;
    //         num--;
    //     }

    //     setImage(image.setAttribute("src", "rec" + num + ".png"))

    //     if (audio.paused) {
    //         audio.setAttribute("src", "aud" + num + ".mp3");
    //     } else {
    //         audio.setAttribute("src", "aud" + num + ".mp3");
    //         audio.play();
    //     }
    //     if (image.getAttribute('src') === "rec1.png") {
    //         title.innerText = num + "." + "Ohayo"
    //     } else if (image.getAttribute('src') === "rec2.png") {
    //         title.innerText = num + "." + "4walls"
    //     } else if (image.getAttribute('src') === "rec2.png") {
    //         title.innerText = num + "." + "sunny"
    //     } else if (image.getAttribute('src') === "rec2.png") {
    //         title.innerText = num + "." + "sunny"
    //     }
    // }


    function playLp() {
        //     var audio = document.querySelector(".styles.audioPlay");
        // let rec = document.querySelector(".styles.rec").getAttribute('src');
        // let title = document.querySelector(".styles.console");

        // if (audio.paused) {
        //     audio.play();
        // } else {
        //     audio.pause();
        //     audio.currentTime = 0
        // }
        // if (rec === "rec1.png") {
        //     title.innerText = "1. Ohayo";
        // }
    }

    return (
        <div className={styles.frame}>
            <NavBar />
            <div className={styles.page}>
                <div className={styles.turntable}>
                    <div className={styles.platter}></div>
                    <img src={`/image/rec${index}.png`} className={styles.rec} alt='' />
                    <div className={styles.record}>
                        <div className={styles.label}>
                            <div className={styles.nub}></div>
                            <div className={styles.marker}></div>
                        </div>
                    </div>
                    <div className={styles.shiner}></div>
                    <div className={styles.tonearmBase}></div>
                    <div className={styles.tonearm} style={{ zIndex: '2' }}>
                        <div className={styles.tonearmArm}>
                            <div className={styles.stylus}></div>
                        </div>
                    </div>
                    <div className={styles.startstop} onClick={playLp}></div>
                    <div className={styles.buttons}>
                        <button className={styles.nextLp} onClick={handlePrevImage}>◀</button>
                        <button className={styles.nextLp} onClick={handleNextImage}>▶</button>
                    </div>
                    <div className={styles.adapter}></div>
                    <div className={styles.toggler}></div>
                    <div className={styles.bpm}><div className={styles.knob}></div></div>
                    <div className={styles.onoff}></div>
                    <div className={styles.speed1}></div>
                    <div className={styles.speed2}></div>
                    <div className={styles.topdot}></div>
                    <div className={styles.console}>LET ME GIVE YOU MY TASTE</div>
                </div>
                <audio
                    className={styles.audioPlay}
                    src={`/audio/aud${index}.mp3`}
                    type="audio/mp3"
                    onLoadStart={"this.volume =  0.1"}
                    loop
                />
            </div>
        </div >
    )
}

export default TurnTable
