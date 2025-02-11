import CompleteItemsContainer from "./CompleteItemsContainer";
import styles from "./Complete.module.css";

function Complete() {
    return (
        <section className={styles.Complete}>
            <h2 className="titleSecond" style={{marginBottom: "52px"}}>Мы уже выполнили заказы</h2>
            <CompleteItemsContainer/>
        </section>
    )
}

export default Complete;