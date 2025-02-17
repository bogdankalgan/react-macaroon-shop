import styles from './Hero.module.css'
import roundStyles from './rounds.module.css'

function Hero() {
    return (
        <section className={styles.Hero}>
            <div className={styles.HeroImg}>
                <img src='/img/deliveryHero/1.png' alt="delivery hero page img"/>
                <div className={roundStyles.roseRound}></div>
                <div className={roundStyles.yellowRound}></div>
            </div>

            <div className={styles.HeroContent}>
                <h1 className='titleFirst' style={{marginBottom: "17px"}}>Доставка и оплата</h1>

                <p className='descr'>Для наших покупателей доступны 2 способа доставки: <br/>
                    <span>курьерская доставка</span> по
                    Санкт-Петербургу в пределах КАД и <span>самовывоз</span>.
                </p>

                <p className={styles.HeroTitle}>Курьерска доставка:</p>

                <p className={styles.HeroDescr}>Курьеры работают каждый день с 11 до 21 часа. <br/>Доставка макарон
                    осуществляется только по <br/>Санкт-Петербургу
                    в пределах кольцевой автомобильной дороги (КАД). <a href="*">Точная зона доставки.</a></p>

                <p className={styles.HeroDescr}>Если Вы готовы принять заказ в интервале с 12 до 17 часов или с 17 до 21
                    часа, то доставка будет
                    стоить 300 рублей.</p>

                <p className={styles.HeroDescr}>При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.</p>

                <p className={styles.HeroDescr}>При оформлении заказа до 15 часов возможна доставка <br/>в тот же день в
                    промежутке с 17 до 21 часа.
                </p>

                <p className={styles.HeroDescr}>Курьер предупредит Вас о своём прибытии за 30-40 минут.</p>
            </div>
        </section>
    )
}

export default Hero