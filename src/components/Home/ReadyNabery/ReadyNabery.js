import {useState, useEffect} from "react";
import Header from '../Header/Header';
import Breadcrumbs from "../../BreadCrumbs";
import PopularButton from "../Popular/PopularButton";
import PopularItemContainer from "../Popular/PopularItemContainer";
import FilterContainer from "./FilterContainer";
import styles from "./ReadyNabery.module.css";
import {dataBase} from "../../dataBase";

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
            <PopularItemContainer items={items}/>
            <div className={styles.ReadyNaberyButton}>
                {hasMore && <PopularButton text="Показать ещё" onClick={handleLoadMore}/>}
            </div>
        </div>
    );
}

export default ReadyNabery;
