import PopularButton from '../Popular/PopularButton'
import NewsItemContainer from "./NewsItemContainer";
import styles from "./News.module.css";

function News() {
    return (
        <section className={styles.News}>
            <h2 className="titleSecond">Новости</h2>
            <NewsItemContainer/>
            <PopularButton text="Все новости"/>
        </section>
    )
}

export default News;