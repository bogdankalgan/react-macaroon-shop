import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {dataBase} from "../dataBase";
import Header from '../Home/Header/Header';
import Breadcrumbs from "../BreadCrumbs";
import OneNewContent from "./OneNewContent/OneNewContent";
import OneNewImg from "./OneNewImg/OneNewImg";
import Calculation from "../Layer/Calculation/Calculation";
import styles from "./OneNew.module.css"

function OneNew() {
    const {id} = useParams();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const imageArray = [news?.imgpath, news?.img1, news?.img2, news?.img3].filter(Boolean);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const {data, error} = await dataBase.from('news').select('*').eq('id', id).single()

                if (error) throw error;

                setNews(data);
                setLoading(false);
            } catch (error) {
                console.error("Ошибка при загрузке данных", error);
                setLoading(false);
            }
        }
        fetchNews();
    }, [id])

    if (loading) {
        return (
            <h1 className='titleFirst'>Загрузка...</h1>
        )
    }

    if (!news) {
        return (
            <h1 className='titleFirst'>Новость не найдена</h1>
        )
    }

    return (
        <div className={styles.OneNew}>
            <Header/>
            <Breadcrumbs title={news.title}/>

            <div className={styles.OneNewContainer}>
                <OneNewContent title={news.title} descr={news.onenewdescr}/>
                <OneNewImg images={imageArray}/>
            </div>

            <Calculation/>
        </div>
    )
}

export default OneNew;
