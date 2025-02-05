import React from "react";
import styles from "./Card.module.css";


function Card(props) {
    const {title, bannerText, imgUrl} = props;

    return (
        <div className={styles.ActionItem}>
            <div
                style={{backgroundColor: bannerText === "НОВИНКА" || bannerText === "СЛАДКАЯ НОВИНКА" ? "#FF4D6D" : "#8CC4EC"}}
                className={styles.ActionItemBanner}>
                <p>{bannerText}</p>
            </div>

            <img src={imgUrl} alt={title}></img>

            <div
                style={{backgroundColor: bannerText === "НОВИНКА" || bannerText === "СЛАДКАЯ НОВИНКА" ? "#FF4D6D" : "#8CC4EC"}}
                className={styles.ActionItemTitle}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Card;