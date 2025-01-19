import React from "react";
import styles from "./ActionButton.module.css"

function ActionButton({isActive}) {
    return (
        <button className={`${styles.ActionButton} ${isActive ? styles.isActive : ""}`}></button>
    )
}

export default ActionButton;