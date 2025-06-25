import styles from './CardPageTop.module.css'
import Price from '../Price/Price'
import Taste from '../Taste/Taste'


function CardPageTop(props) {
    const {title, descr, imgPath, price, taste, count} = props


    return (
        <div className={styles.CardPageTop}>
            <div className={styles.CardPageTopImg}>
                <img src={imgPath} alt={descr} />
                <img src={imgPath} alt={descr} />
                <img src={imgPath} alt={descr} />
                <img src={imgPath} alt={descr} />
            </div>


            <div className={styles.CardPageTopContent}>
                <h1 className='titleFirst'>{title}</h1>

                <p className={styles.CardPageTopDescr}>{descr}</p>

                <div className={ `${styles.CardPageTopImg} ${styles.mobileOnlyImages}`}>
                    <img src={imgPath} alt={descr} />
                    <img src={imgPath} alt={descr} />
                    <img src={imgPath} alt={descr} />
                    <img src={imgPath} alt={descr} />
                </div>

                <Taste taste={taste} count={count}/>
                <Price price={price} />

                <div className={styles.CardPageTopPros}>
                    <div className={styles.CardPageTopItem}>
                        <img src='/icons/cardPagePros/1.svg' alt='card page pros icon' />

                        <p>Доставка от <span>400 руб.</span>  в день заказа с 12 до 17 или с 17 до 21. <br/> <span>Бесплатно</span> при заказе на сумму от 2000 руб</p>
                    </div>

                    <div className={styles.CardPageTopItem}>
                        <img src='/icons/cardPagePros/2.svg' alt='card page pros icon' />

                        <p>Самовывоз <span>бесплатно</span>. <br/> Через 3 часа после оплаты заказа</p>
                    </div>

                    <div className={styles.CardPageTopItem}>
                        <img src='/icons/cardPagePros/3.svg' alt='card page pros icon' />

                        <p>Можем преподнести как анонимный подарок:)</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CardPageTop