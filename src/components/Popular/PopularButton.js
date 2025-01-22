import React from "react";
import styles from './PopularButton.module.css';

function PopularButton(props) {
    const {onClick} = props;
    return (
        <button className={styles.PopularButton} onClick={onClick}>Все праздничные наборы</button>
    )
}

export default PopularButton;