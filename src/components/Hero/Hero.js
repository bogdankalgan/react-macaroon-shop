import HeroImg from './HeroImg'
import HeroText from './HeroText'
import styles from './Hero.module.css'

function Hero() {


    return (
        <section className={styles.Hero}>
            <HeroImg/>
            <HeroText/>
            <div className={styles.whiteRound}></div>
            <div className={styles.roseRound}></div>
            <div className={styles.blueRound}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    )
}

export default Hero;