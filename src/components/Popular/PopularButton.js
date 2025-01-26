import React from "react";
import styles from './PopularButton.module.css';

function PopularButton(props) {
    const {onClick, text} = props;
    return (
        <button className={styles.PopularButton} onClick={onClick}>{text}</button>
    )
}

export default PopularButton;