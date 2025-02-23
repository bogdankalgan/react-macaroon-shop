import React, {useEffect, useRef, useState} from "react";
import {dataBase} from "../../dataBase";
import styles from "../../Catalog/Catalog.module.css";
import CatalogCardsButton from "../../Catalog/CatalogCardsButton";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import buttonStyles from "../../Catalog/CatalogCardsButton.module.css";
import PopularItem from "../../Home/Popular/PopularItem";
import PopularButton from "../../Home/Popular/PopularButton";


function Also() {
    const [catalogCards, setCatalogCards] = useState([]);
    const containerRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);


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

    return (
        <div>
            <h2 className="titleSecond" style={{marginBottom: "36px"}}>Вам могут понравиться</h2>

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
        </div>
    )
}

export default Also