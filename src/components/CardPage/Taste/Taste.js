import styles from "./Taste.module.css"

function Taste(props) {
    const {taste, count} = props;

    return (
        <div className={styles.Taste}>
            <p className={styles.TasteTitle}>Вкусы:</p>

            <div className={styles.TasteContent}>
            <div className={styles.TasteText}>{taste.split(" ").map((word, index ) => {
                return (<p key={index}>{word}</p>)
            })}</div>

            <div className={styles.TasteCount}>{count.split(".").map((num, index) => {
                return(<p key={index}>{num}</p>)
            })}</div>
            </div>
        </div>
    )
}

export default Taste;