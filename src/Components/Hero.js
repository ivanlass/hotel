import React from 'react';
import styles from './Hero.module.css'


function Hero(props) {

    const height = {
        height: props.height ? props.height : "30vh"
    }

    return (
        <div className={styles.heroWrapper} style={height}>
            <img src={props.rooms} alt="rooms" />
            <h1 className={styles.heading}>{props.heading}</h1>
        </div>
    );
}

export default Hero;
