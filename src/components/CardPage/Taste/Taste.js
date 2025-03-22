import styles from "./Taste.module.css"

function Taste(props) {
    const {taste, count} = props;

    return (
        <div className={styles.Taste}>
            <p className={styles.TasteTitle}>Вкусы:</p>

            <div className={styles.TasteContent}>
                <div className={styles.TasteText}>
                    {(taste ? taste.split(" ") : []).map((word, index) => (
                        <p key={index}>{word}</p>
                    ))}
                </div>

                <div className={styles.TasteCount}>
                    {(count ? count.split(".") : []).map((num, index) => (
                        <p key={index}>{num}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Taste;
