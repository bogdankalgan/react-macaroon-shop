import CareItemContainer from './CareItemContainer'
import styles from './Care.module.css'

function Care() {
    return (
        <section className={styles.Care}>
            <h2>Мы обо всём позаботились</h2>
            <CareItemContainer/>
        </section>
    )
}

export default Care;