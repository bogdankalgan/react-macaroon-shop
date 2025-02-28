import {useEffect, useState} from 'react'
import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";
import NewsFilter from "./NewsFilter/NewsFilter";
import {dataBase} from "../dataBase";
import NewsItem from "../Home/News/NewsItem";
import styles from "./News.module.css";
import containerStyles from "../Home/News/NewsItemContainer.module.css";


function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const {data, error} = await dataBase.from('news').select("*");

                if (error) throw error;
                setNews(data);
            } catch (error) {
                console.error('Ошибка при загрузке данных', error)
            }
        }
        fetchNews();
    }, [])

    return (
        <div className={styles.News}>
            <Header/>
            <BreadCrumbs/>

            <h2 className='titleSecond' style={{marginBottom: "38px"}}>Новости</h2>

            <NewsFilter/>

            <div className={containerStyles.NewsItemContainer}>
                {news.map((item, index) => (
                    <NewsItem key={index} imgPath={item.imgpath} title={item.title} descr={item.description}
                              date={item.date} id={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default News;