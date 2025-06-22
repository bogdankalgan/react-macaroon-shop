import {useState, useEffect} from "react";
import Header from '../Home/Header/Header';
import Breadcrumbs from "../BreadCrumbs";
import PopularButton from "../Home/Popular/PopularButton";
import PopularItemContainer from "../Home/Popular/PopularItemContainer";
import FilterContainer from "./FilterContainer";
import styles from "./ReadyNabery.module.css";
import {dataBase} from "../dataBase";

function ReadyNabery() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const limit = 6;

    const fetchItems = async (page) => {
        try {
            const start = (page - 1) * limit;
            const end = start + limit - 1;

            const {data, error} = await dataBase.from('popularitems').select("*").range(start, end);

            if (error) throw error;

            if (data.length === 0) {
                setHasMore(false);
            } else {
                setItems((prevItems) => [...prevItems, ...data]);
            }
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    };

    useEffect(() => {
        fetchItems(page);
    }, [page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className={styles.ReadyNabery}>
            <Header/>
            <Breadcrumbs/>
            <h2 className="titleSecond">Готовые наборы</h2>
            <FilterContainer/>
            <div className={styles.ReadyNaberyItems}>
                <PopularItemContainer items={items} hidden={false}/>
            </div>
            <div className={styles.ReadyNaberyButton}>
                {hasMore && <PopularButton text="Показать ещё" onClick={handleLoadMore}/>}
            </div>
        </div>
    );
}

export default ReadyNabery;
