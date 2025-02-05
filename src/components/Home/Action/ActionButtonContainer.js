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
