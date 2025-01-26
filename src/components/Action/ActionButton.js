import React from "react";
import styles from "./ActionButton.module.css"

function ActionButton({isActive, onClick}) {
    return (
        <button className={`${styles.ActionButton} ${isActive ? styles.isActive : ""}`} onClick={onClick}></button>
    )
}

export default ActionButton;