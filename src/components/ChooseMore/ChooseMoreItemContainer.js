import ChooseMoreItem from './ChooseMoreItem';
import styles from './ChooseMoreItemContainer.module.css';

function ChooseMoreItemContainer({selectedExtras, setSelectedExtras}) {

    const handleAddExtra = (item) => {
        setSelectedExtras(prev => {
            const exists = prev.find(i => i.title === item.title )

            if(exists) {
               return prev.map(i => i.title === item.title ? {...i, count: i.count + 1} : i)
            }
            return [...prev, {...item, count: 1}]
        })
    }

    const handleRemoveExtra = (item) => {
        setSelectedExtras(prev => {
            return prev
                .map(i => i.title === item.title ? {...i, count: i.count - 1} : i)
                .filter(i => i.count > 0);
        })
    }

    const items = [
        {title: "Открыточка с пожеланием", price: 30},
        {title: "Открытка 2", price: 50},
        {title: "Лента атласная", price: 0},
        {title: "Набор эклеров 6 шт.", price: 450},
    ]




    return (
        <div className={styles.ChooseMoreItemContainer}>
            {items.map((item) => {
                const selected = selectedExtras.find(i => i.title === item.title)

                const count = selected ? selected.count : 0

                return (
                    <ChooseMoreItem title={item.title} price={item.price} key={item.title} count={count} onIncrease={() => handleAddExtra(item)} onDecrease={() => handleRemoveExtra(item)}/>)
            })}
        </div>
    )
}

export default ChooseMoreItemContainer;