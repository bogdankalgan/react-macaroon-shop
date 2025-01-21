import styles from "./Holidays.module.css";
import HolidaysItem from "./HolidaysItem";

function Holidays() {
    const items = [
        {text: "Скоро\nДень рождения близкого человека ", imtUrl: "./icons/holidays/1.svg"},
        {text: "1 января\n Новый Год\n2021", imtUrl: "./icons/holidays/2.svg"},
        {text: "14 февраля\n День Святого Валентина", imtUrl: "./icons/holidays/3.svg"},
        {text: "23 февраля\n День Защитника Отечества", imtUrl: "./icons/holidays/4.svg"},
        {text: "8 марта\n Международный Женский День", imtUrl: "./icons/holidays/5.svg"},
        {text: "9 марта\n День Сурка", imtUrl: "./icons/holidays/6.svg"},
    ]
    return (
        <section className={styles.Holidays}>
            <h2 className='titleSecond'>Ближайшие праздники</h2>
            <div className={styles.HolidaysItems}>
                <div className={styles.HolidaysDivider}></div>
                {items.map((item, index) => {
                    return <HolidaysItem key={index} text={item.text} imgUrl={item.imtUrl}
                                         animationDelay={`${index * 0.9}s`}/>
                })}
            </div>
        </section>
    )
}

export default Holidays;