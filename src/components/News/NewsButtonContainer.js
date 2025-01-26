import ActionButton from "../Action/ActionButton";
import styles from "./NewsButtonContainer.module.css";

function NewsButtonContainer({totalPages, currentPage, onPageChange}) {
    return (
        <div className={styles.NewsButtonContainer}>
            {Array.from({length: totalPages}).map((_, index) => (
                <ActionButton
                    key={index}
                    isActive={currentPage === index + 1}
                    onClick={() => onPageChange(index + 1)}
                />
            ))}
        </div>
    );
}

export default NewsButtonContainer;

