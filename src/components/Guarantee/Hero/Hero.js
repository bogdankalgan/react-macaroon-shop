import styles from './Hero.module.css'

import HeroItem from './HeroItem'

function Hero() {
    const items = [
        {imgUrl: "/img/guaranteeHero/1.png", text: "100% \n миндальная мука"},

        {
            imgUrl: '/img/guaranteeHero/2.png', text: '100% \n безопасные пищевые красители'
        },

        {
            imgUrl: "/img/guaranteeHero/3.png", text: "100% \n фруктовые пюре и натруральные ингредиенты"
        }
    ]

    return (
        <section className={styles.Hero}>
            <h2 className='titleSecond' style={{marginBottom: " 34px"}}>Гарантии вкуса и качества</h2>

            <p className='descr' style={{marginBottom: "49px", textAlign: 'center'}}>При изготовлении пирожных мы
                используем только
                натуральные <br/>
                ингредиенты, избегая
                использования конвер</p>

            <div className={styles.HeroItems}>
                {items.map((item, index) => {
                    return (
                        <HeroItem imgUrl={item.imgUrl} text={item.text} key={index}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Hero