import styles from './HeroText.module.css';

function HeroText() {
    return (
        <div className={styles.HeroText}>
            <p className={styles.HeroTextTitle}>Macaronshop</p>

            <div className={styles.HeroTextSubtitle}>
                <div className={styles.HeroTextSubsubtitleDevider}></div>

                <p>
                    since 2013
                </p>

                <div className={styles.HeroTextSubsubtitleDevider}></div>
            </div>

            <h1 className="titleFirst">Настоящая любовь</h1>

            <p className="descr">Пирожные макарон и другие десерты <br/> из натуральных ингредиентов, приготовленные с
                любовью</p>
        </div>
    )
}

export default HeroText;