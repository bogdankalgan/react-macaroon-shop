import styles from "./OfferItem.module.css";

function OfferItem(props) {
    const {img, text} = props;

    return (
        <div className={styles.OfferItem}>
            <div className={styles.OfferItemImg}>
                <img src={img} alt="xui"/>
            </div>

            <p className={styles.OfferItemTitle}>{text}</p>
        </div>
    )
}

export default OfferItem;