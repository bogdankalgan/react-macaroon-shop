/*
import React from "react";
import ActionButton from "./ActionButton";
import styles from "./ActionButtonContainer.module.css";

function ActionButtonContainer(props) {
    const {totalPages, currentPage, onPageChange} = props;
    return (
        <div className={styles.ActionButtonContainer}>
            {Array.from({length: totalPages}).map((_, index) => (
                <ActionButton key={index} isActive={currentPage === index + 1}
                              onClick={() => onPageChange(currentPage + 1)}/>
            ))}
        </div>
    );
}

export default ActionButtonContainer;*/


import React from "react";
import styles from "./ActionButtonContainer.module.css";
import buttonStyles from "./ActionButton.module.css";

function ActionButtonContainer({totalPages, currentPage, onPageChange}) {
    return (
        <div className={styles.ActionButtonContainer}>
            {Array.from({length: totalPages}).map((_, index) => (
                <button
                    key={index}
                    className={`${buttonStyles.ActionButton} ${
                        currentPage === index + 1 ? buttonStyles.isActive : ""
                    }`}
                    onClick={() => onPageChange(index + 1)}
                >
                </button>
            ))}
        </div>
    );
}

export default ActionButtonContainer;
