import styles from "../../Catalog/Catalog.module.css";
import CatalogCardsButton from "../../Catalog/CatalogCardsButton";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import buttonStyles from "../../Catalog/CatalogCardsButton.module.css";
import PopularItem from "../../Home/Popular/PopularItem";
import React, {useEffect, useRef, useState} from "react";
import {dataBase} from "../../dataBase";

function CartAddMoreItems() {
    const [catalogCards, setCatalogCards] = useState([]);
    const containerRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);

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
 )
}

export default CartAddMoreItems;