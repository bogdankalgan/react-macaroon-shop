import styles from './Price.module.css'
import AddToTrashButton from "./AddToTrashButton";

function Price(props) {
    const {price} = props

    return (
        <div className={styles.Price}>
            <p className={styles.PriceText}>{price}</p>

            <AddToTrashButton/>
        </div>
    )
}

export default Price