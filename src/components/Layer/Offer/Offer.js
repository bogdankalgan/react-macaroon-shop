import OfferItem from './OfferItem'
import styles from './Offer.module.css'

function Offer() {
    const items = [
        {img: "/icons/layerOffer/1.svg", text: "Корпоративные \n подарки"},
        {img: "/icons/layerOffer/2.svg", text: "Сотрудничество с интернет магазинами"},
        {img: "/icons/layerOffer/3.svg", text: "Сотрудничество  с кафе и ресторанами"},
        {img: "/icons/layerOffer/4.svg", text: "Сотрудничество  с кофейнями"},
        {img: "/icons/layerOffer/5.svg", text: "Сотрудничество  с отелями"},
        {img: "/icons/layerOffer/6.svg", text: "Для Retail"},
        {img: "/icons/layerOffer/7.svg", text: "Кенди бары для мероприятий"},
        {img: "/icons/layerOffer/8.svg", text: "И для других сфер бизнеса"}
    ]


    return (
        <section className={styles.Offer}>
            <h2 className="titleSecond">Что мы можем вам предложить:</h2>

            <div className={styles.OfferItemContainer}>
                {items.map((item) => {
                    return <OfferItem key={item.text} text={item.text} img={item.img}/>;
                })}
            </div>
        </section>
    )
}

export default Offer;