import styles from "./Hero.module.css";
import roundStyles from "./Rounds.module.css"
import PopularButton from "../../Home/Popular/PopularButton"

function Hero() {
    return (
        <section className={styles.Hero}>
            <div className={roundStyles.whiteRound}></div>
            <div className={roundStyles.FFround}></div>
            <div className={roundStyles.FF3round}></div>
            <div className={roundStyles.roseRound}></div>
            <div className={roundStyles.roseRound}></div>
            <div className={roundStyles.FF9round}></div>

            <div className={styles.HeroImg}>
                <img src="/img/marriegeHero/1.png" alt="hero
                 marriege img"/>

                <img src="/img/marriegeHero/leaf.png" alt="hero marriege img"/>

                <img src="/img/marriegeHero/roseMacaroon.png" alt="hero marriege img"/>

                <img src="/img/marriegeHero/biegeMacaroon.png" alt="hero marriege img"/>
            </div>

            <div className={styles.HeroText}>
                <h2 className="titleFirst" style={{marginBottom: "13px", textAlign: "center"}}>Свадебное
                    предложение</h2>

                <p className="descr" style={{marginBottom: "34px", textAlign: "center"}}>
                    Нежные пирожные макаронс с разными вкусами для <br/> украшения вашего свадебного торжества
                </p>

                <div className={styles.HeroButtons}>
                    <PopularButton text="Презентация"/>
                    <PopularButton text="Прайс-лист"/>
                </div>

                <p className={styles.HeroText}>Рыба-текст предложения</p>

                <p className={styles.HeroText}>
                    Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся
                    непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной
                    неузнаваемости, из-за чего возрастает их статус бесполезности.
                </p>
            </div>
        </section>
    )
}

export default Hero;