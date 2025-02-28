import Filter from '../../Home/ReadyNabery/Filter';
import styles from './OneNewFilter.module.css';

function OneNewFilter() {
    const items = [
        {text: "8 марта"},
        {text: "Весна"},
        {text: "Подарок на 8 марта"},

    ]

    return (
        <div className={styles.OneNewFilter}>
            {items.map((item, i) => (
                <Filter text={item.text} key={i}/>
            ))}
        </div>
    )
}

export default OneNewFilter;