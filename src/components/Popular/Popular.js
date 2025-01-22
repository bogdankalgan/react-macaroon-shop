import {useState, useEffect} from "react";
import PopularButton from './PopularButton';
import PopularItemContainer from "./PopularItemContainer";
import styles from './Popular.module.css';
import {dataBase} from '../dataBase';

function Popular() {
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
            console.error("Error loading data", error);
        }
    };

    useEffect(() => {
        fetchItems(page);
    }, [page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    }


    return (
        <section className={styles.Popular}>
            <h2 className="titleSecond">Популярные наборы</h2>
            <PopularItemContainer items={items}/>
            {hasMore && <PopularButton onClick={handleLoadMore}/>}
        </section>
    )
}

export default Popular;