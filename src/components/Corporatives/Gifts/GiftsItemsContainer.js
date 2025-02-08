import PopularItem from "../../Home/Popular/PopularItem";
import React, {useState, useEffect} from "react";
import {dataBase} from "../../dataBase";
import styles from "./GiftsItemsContainer.module.css";


function GiftsItemsContainer() {
    const [gifts, setGifts] = useState([]);

    useEffect(() => {

        const fetchGifts = async () => {
            try {
                const {data, error} = await dataBase.from("giftsitems").select("*");

                if (error) throw error;

                setGifts(data);
            } catch (error) {
                console.error("Ошибка при загрузке данных", error);
            }
        }

        fetchGifts();
    }, [])

    return (
        <div className={styles.GiftsItemsContainer}>
            {gifts.map((gift) => (
                <PopularItem imgPath={gift.imgpath} key={gift.id} price={gift.price} title={gift.title}
                             descr={gift.description}/>
            ))}
        </div>
    )
}

export default GiftsItemsContainer;