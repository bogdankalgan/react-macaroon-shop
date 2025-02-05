import CardContainer from './CardContainer';
import styles from './Action.module.css';

function Action() {
    return (
        <section className={styles.Action}>
            <h2 className="titleSecond">Акции</h2>
            <CardContainer/>
        </section>
    )
}

export default Action;