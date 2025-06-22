import Filter from './Filter';
import styles from './FilterContainer.module.css';

function FilterContainer() {
    const items = [
        {text: 'Свадьба', id: 1},
        {text: 'Девичник', id: 2},
        {text: 'День рождения', id: 3},
        {text: '8 марта', id: 4},
        {text: '23 февраля', id: 5},
        {text: 'Новый год', id: 6},
        {text: 'День учителя', id: 7},
        {text: 'День тренера', id: 8},
        {text: '1 сентября', id: 9},
        {text: 'Пасха', id: 10},
        {text: 'Без печати', id: 11},
    ]

    return (
        <div className={styles.FilterContainer}>
            {items.map((item) => (
                <Filter text={item.text} key={item.id}/>
            ))}
        </div>
    )
}

export default FilterContainer;