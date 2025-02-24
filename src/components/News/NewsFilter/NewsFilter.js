import styles from "./NewsFilter.module.css";
import Filter from '../../Home/ReadyNabery/Filter';
import filterContainerStyles from '../../Home/ReadyNabery/FilterContainer.module.css'

function NewsFilter() {
    const items = [
        {text: "Все новости"},
        {text: "Обновления ассортимента"},
        {text: "Акции"},
        {text: "Конкурсы"},
        {text: "подарок на 8 марта"},
        {text: "весна"},
    ]

    return (
        <div className={styles.NewsFilter}>
            <div className={filterContainerStyles.FilterContainer} style={{justifyContent: 'start'}}>
                {items.map((item, index) => (
                    <Filter text={item.text} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default NewsFilter;