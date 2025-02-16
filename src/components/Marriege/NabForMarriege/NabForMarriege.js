import styles from './NabForMarriege.module.css'
import NabForMarriegeItem from './NabForMarriegeItem'

function NabForMarriege() {
    return (
        <section className={styles.NabForMarriege}>
            <h2 className="titleSecond">Наборы для свадьбы</h2>
            <NabForMarriegeItem/>
        </section>
    )
}

export default NabForMarriege