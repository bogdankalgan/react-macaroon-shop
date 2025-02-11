import styles from './CompleteItem.module.css'

function CompleteItem(props) {
    const {text} = props;

    return (
        <div className={styles.completeItem}>
            <div className={styles.completeItemImg}></div>

            <p className={styles.completeItemText}>{text}</p>
        </div>
    )
}

export default CompleteItem;