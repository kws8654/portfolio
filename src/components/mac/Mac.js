import React from 'react'
import DockBar from '../dockBar/DockBar'
import Home from '../home/Home'
import NavBar from '../navBar/NavBar'
import styles from './Mac.module.css'

function Mac() {
    return (
        <div className={styles.mac} style={{
            backgroundImage: 'url("/image/10-13.jpeg")'
        }}>
            <NavBar />
            <Home />
            <DockBar />
        </div>
    )
}

export default Mac
