import PopularButton from '../Popular/PopularButton'
import NewsItemContainer from "./NewsItemContainer";
import styles from "./News.module.css";

function News() {
    return (
        <section className={styles.News}>
            <h2 className="titleSecond">Новости</h2>
            <NewsItemContainer/>
            <div style={{textAlign: "center"}}>
                <PopularButton text="Все новости"/>
            </div>
        </section>
    )
}

export default News;