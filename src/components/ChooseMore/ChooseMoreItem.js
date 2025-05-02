import styles from "./ChooseMoreItem.module.css"

function ChooseMoreItem({title, price, count, onIncrease, onDecrease}) {
    return (
        <div className={styles.ChooseMoreItem}>
            <div className={styles.ChooseMoreItemImg}></div>

            <p className={styles.ChooseMoreItemText}>{title}</p>

            <div className={styles.ChooseMoreItemPriceBlock}>
                <p className={styles.ChooseMoreItemPrice}>{price} руб</p>

                <div className={styles.ChooseMoreItemCounter}>
                    <button onClick={onDecrease}>-</button>
                    <p>{count}</p>
                    <button onClick={onIncrease}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ChooseMoreItem