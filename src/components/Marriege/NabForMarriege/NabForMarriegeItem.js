import {useState, useEffect} from "react";
import PopularItem from "../../Home/Popular/PopularItem";
import {dataBase} from "../../dataBase";
import styles from "./NabForMarriegeItem.module.css";


function NabForMarriege() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data, error} = await dataBase.from("nabformarriege").select("*");

                if (error) throw error;

                setItems(data)
            } catch (error) {
                console.error("Ошибка при загрузке данных", error)
            }
        }

        fetchData();
    }, [])

    return (
        <div className={styles.NabForMarriegeItem}>
            {items.map((item, index) => (
                <PopularItem imgPath={item.imgpath} title={item.title} price={item.price} id={item.id}
                             descr={item.description} key={index}/>
            ))}
        </div>
    )
}

export default NabForMarriege;