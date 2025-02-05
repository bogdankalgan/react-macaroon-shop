import CareItem from './CareItem';
import styles from './CareItemContainer.module.css'

function CareItemContainer() {
    const items = [
        {
            imgUrl: './img/care/1.png',
            title: 'Лучшие ингрединты',
            descr: 'Что-то про суперкачество, лучших поваров, свежесть и т.д.'
        },

        {
            imgUrl: './img/care/2.png',
            title: 'Упаковка',
            descr: 'Что-то про суперкоробочки и бантики и бла бла бла'
        },

        {
            imgUrl: './img/care/3.png',
            title: 'Получение в день заказа',
            descr: 'В день заказа доставка курьером или самовывоз'
        },

        {
            imgUrl: './img/care/4.png',
            title: 'Анонимная доставка',
            descr: 'Можем преподнести Ваш заказ как анонимный подарок'
        }
    ]

    return (
        <div className={styles.CareItemContainer}>
            {items.map((item, index) => (
                <CareItem imgUrl={item.imgUrl} title={item.title} descr={item.descr} key={index}/>
            ))}
        </div>
    )
}

export default CareItemContainer;