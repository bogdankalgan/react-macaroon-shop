import Breadcrumbs from "../../BreadCrumbs";
import styles from "./Hero.module.css";
import roundStyles from "./Rounds.module.css";

function Hero() {
    return (
        <section className={styles.Hero}>
            <Breadcrumbs/>

            <div>
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

                <div className={styles.HeroText}></div>
            </div>
        </section>
    )
}

export default Hero;