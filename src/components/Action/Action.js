import CardContainer from './CardContainer';
import styles from './Action.module.css';

function Action() {
    return (
        <div className={styles.Action}>
            <h2 className="titleSecond">Акции</h2>
            <CardContainer/>
        </div>
    )
}

export default Action;