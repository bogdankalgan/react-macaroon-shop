import React/* {useEffect, useState}*/ from "react";
import styles from "./HeroImg.module.css";
import {motion} from "framer-motion";

function HeroImg() {

    const images = [
        'img/hero/top-center-nut.png',
        'img/hero/top-right-brown-macaron.png',
        'img/hero/center-right-leaf.png',
        'img/hero/center-right-nut.png',
        'img/hero/bottom-right-rose-macaroon.png',
        'img/hero/bottom-right-nut.png',
        'img/hero/bottom-left-nut.png',
        'img/hero/bottom-left-rose-macaroon.png',
        'img/hero/center-left-leaf.png',
        'img/hero/center-left-white-macaroon.png',
        'img/hero/top-left-nut.png',
        'img/hero/top-left-rose-macaroon.png',
    ]

    const getRandomPosition = () => ({
        x: Math.random() * 20 - 20,
        y: Math.random() * 20 - 20,
    })
    return (
        <div className={styles.HeroImg}>
            <picture>
                <source media="(max-width: 320px)" srcSet="img/hero/main-img-mobile.png"/>
                <img alt="hero animated img" src="img/hero/main-img.png" className={styles.mainImg}></img>
            </picture>
            {images.map((image, index) => (
                <motion.div key={index} animate={{...getRandomPosition()}} transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeOut"
                }}>
                    <img src={image} alt={image}></img>
                </motion.div>
            ))}
        </div>
    )
}

export default HeroImg;