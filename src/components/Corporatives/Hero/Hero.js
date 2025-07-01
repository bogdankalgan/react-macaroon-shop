import Breadcrumbs from "../../BreadCrumbs";
import styles from "./Hero.module.css";
import roundStyles from "./Rounds.module.css";
import PinkButton from "../PinkButton";

function Hero() {
    return (
        <section className={styles.Hero}>
            <Breadcrumbs/>

            <div className={styles.HeroBottom}>
                <div className={styles.HeroImg}>
                    <img src='img/corporativesHero/1.png' alt='1'/>

                    <img src='img/corporativesHero/2.png' alt='1'/>

                    <img src='img/corporativesHero/3.png' alt='1'/>

                    <img src='img/corporativesHero/4.png' alt='1'/>

                    <img src='img/corporativesHero/5.png' alt='1'/>

                    <img src='img/corporativesHero/6.png' alt='1'/>

                    <img src='img/corporativesHero/7.png' alt='1'/>

                    <img src='img/corporativesHero/8.png' alt='1'/>

                    <img src='img/corporativesHero/9.png' alt='1'/>

                    <div className={roundStyles.greyRound}></div>
                    <div className={roundStyles.greenRound}></div>
                    <div className={roundStyles.blueRound}></div>
                    <div className={roundStyles.round98}></div>
                    <div className={roundStyles.round98Two}></div>
                </div>

                <div className={styles.HeroText}>
                    <h2 className="titleSecond">Корпоративные подарки</h2>
                    <p className="descr">Брендированные пирожные
                        макарон, которые
                        поднимут <br/> аппетит ваших клиентов
                        или порадуют коллектив</p>


                    <p className="descr">
                        Поднять мотивацию сотрудников? Увеличить лояльность клиентов или расположить их к <br/> себе
                        перед
                        большой сделкой? <br/>
                        Мы приготовим наборы пирожных от 200 руб за шт, сделаем индивидуальный дизайн и <br/> нанесём
                        ваши
                        лого. Обычно готовим за 2-3 дня.
                    </p>
                    <div style={{textAlign: "center"}}>
                        <PinkButton text="Скачать весь каталог подарков"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;