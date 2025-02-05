import PopularButton from "../Home/Popular/PopularButton";
import styles from "./CatalogItemHead.module.css";

function CatalogItemHead() {
    return (
        <div className={styles.catalogItemHead}>
            <img src='./img/catalog-item/1.png' alt='Пирожные макарон'/>

            <div className={styles.catalogItemHeadRight}>
                <h2 className="titleSecond">Пирожные макарон</h2>

                <p>Самые классные, самые лучшие, свежие, воздушные, хрустящие макарушки.
                    лучшее, что мы умеем
                    делать.</p>

                <div className={styles.catalogItemHeadButtons}>
                    <PopularButton text="Готовые наборы"/>
                    <PopularButton text="Собрать свой набор"/>
                </div>
            </div>
        </div>
    )
}

export default CatalogItemHead;