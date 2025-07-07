import HeroText from "./HeroText";
import styles from "./Hero.module.css";
import roundStyles from "./Rounds.module.css";

function Hero() {
    return (
        <section className={styles.Hero}>
            <div>
                <img src='/img/layerHero/1.png' alt="layer"/>
            </div>

            <div className={roundStyles.orangeRound}></div>
            <div className={roundStyles.whiteRound}></div>
            <div className={roundStyles.greyRound}></div>


            <div className={styles.HeroTextWrapper}>
                <HeroText />
            </div>


        </section>
    )
}

export default Hero