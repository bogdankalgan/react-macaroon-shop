import OneNewFilter from '../OneNewFilter/OneNewFilter'
import styles from './OneNewContent.module.css'
import OneNewItem from './OneNewItem'

function OneNewContent(props) {
    const {title, descr} = props
    const items = [
        {text: "Набор на 9 макарон - 1200 рублей"},
        {text: "Набор Сердце на 22 макарон - 3500 рублей"},
        {text: "Набор на 12 макарон - 1500 рублей"},
        {text: "Набор Круглый на 40 макарон - 5000 рублей"},
        {text: "Набор на 20 макарон - 1800 рублей"},
        {text: "Набор на 3 макарон - 450 рублей"},
        {text: "Набор-комбо 3+2 - 800 рублей"}
    ]

    return (
        <div className={styles.OneNewContent}>
            <OneNewFilter/>

            <h2 className="titleSecond" style={{textAlign: "left", marginBottom: "20px"}}>{title}</h2>

            <p className='descr' style={{marginBottom: "20px"}}>{descr}</p>

            <p className={styles.OneNewContentDescr}>{title}</p>

            <div>
                <p className={styles.OneNewContentDescr2}>Некоторые варианты подарков:</p>
                {items.map((item, i) => {
                    return (
                        <OneNewItem text={item.text} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default OneNewContent;