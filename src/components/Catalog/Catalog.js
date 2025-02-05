import React, {useState, useEffect, useRef} from "react";
import {dataBase} from "../dataBase";
import Header from "../Home/Header/Header";
import Breadcrumbs from "../BreadCrumbs";
import CatalogItemContainer from "./CatalogItemContainer";
import PopularItem from "../Home/Popular/PopularItem";
import PopularButton from "../Home/Popular/PopularButton";
import styles from "./Catalog.module.css";
import CatalogCardsButton from "./CatalogCardsButton";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import buttonStyles from "./CatalogCardsButton.module.css";

function Catalog() {
    const [catalogCards, setCatalogCards] = useState([]);
    const containerRef = useRef(null); // Ссылка на контейнер
    const [itemWidth, setItemWidth] = useState(0); // Динамическая ширина элемента

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const {data, error} = await dataBase.from("catalogcards").select("*");

                if (error) throw error;

                setCatalogCards(data);
            } catch (error) {
                console.error("Ошибка при загрузке данных", error);
            }
        };

        fetchCards();
    }, []);

    useEffect(() => {
        if (containerRef.current && containerRef.current.firstChild) {
            setItemWidth(containerRef.current.firstChild.getBoundingClientRect().width + 10);
        }
    }, [catalogCards]);


    const scrollLeft = () => {
        if (containerRef.current && itemWidth > 0) {
            containerRef.current.scrollBy({
                left: -itemWidth,
                behavior: "smooth",
            });
        }
    };


    const scrollRight = () => {
        if (containerRef.current && itemWidth > 0) {
            containerRef.current.scrollBy({
                left: itemWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <React.Fragment>
            <Header/>
            <Breadcrumbs/>
            <h2 className="titleSecond" style={{marginBottom: "46px"}}>Каталог десертов</h2>
            <CatalogItemContainer/>
            <h2 className="titleSecond" style={{marginBottom: "20px"}}>Хотите попробовать <br/> всё сразу?</h2>
            <p className="descr" style={{marginBottom: "41px", textAlign: "center"}}>
                Тогда взгляните на наши комбо-наборы
            </p>
            <div className={styles.CatalogCardsWrapper}>

                <CatalogCardsButton icon={faArrowLeft} clas={buttonStyles.catalogCardsButton} onClick={scrollLeft}/>


                <div ref={containerRef} className={styles.CatalogCards}>
                    {catalogCards.length === 0 ? (
                        <p>Загрузка...</p>
                    ) : (
                        catalogCards.map((item) => (
                            <PopularItem
                                imgPath={item.imgpath}
                                title={item.title}
                                descr={item.description}
                                key={item.id}
                                price={item.price}
                            />
                        ))
                    )}
                </div>

                <CatalogCardsButton icon={faArrowRight} clas={buttonStyles.catalogCardsButton} onClick={scrollRight}/>
            </div>
            <div style={{textAlign: "center", marginBottom: "87px"}}>
                <PopularButton text="Все готовые наборы"/>
            </div>
        </React.Fragment>
    );
}

export default Catalog;
