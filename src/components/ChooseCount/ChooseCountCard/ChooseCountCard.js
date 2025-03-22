import styles from './ChooseCountCard.module.css';

function ChooseCountCard({imgPath, title, price, isSelected, onSelect}) {
    return (
        <div
            className={`${styles.ChooseCountCard} ${isSelected ? styles.selected : ""}`}
            onClick={onSelect}
        >
            <div className={styles.ChooseCountCardImg}>
                <img src={imgPath} alt={title}/>
            </div>

            <div className={styles.ChooseCountCardText}>
                <p className={styles.ChooseCountCardTitle}>{title}</p>
                <p className={styles.ChooseCountCardPrice}>{price}</p>
            </div>
        </div>
    );
}

export default ChooseCountCard;
