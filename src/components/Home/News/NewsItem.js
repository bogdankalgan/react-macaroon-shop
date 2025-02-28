import styles from './NewsItem.module.css';
import {Link} from "react-router-dom";

function NewsItem(props) {
    const {imgPath, date, title, descr, id} = props;
    return (
        <Link to={`/news/${id}`} className={styles.NewsItem} id={id} key={id}>
            <img src={imgPath} alt={title}></img>

            <div className={styles.NewsItemContent}>
                <p className={styles.NewsItemDate}>{date}</p>

                <p className={styles.NewsItemTitle}>{title}</p>

                <p className={styles.NewsItemDescr}>{descr}</p>
            </div>
        </Link>
    )
}

export default NewsItem;