import styles from './NewsItem.module.css';

function NewsItem(props) {
    const {imgPath, date, title, descr} = props;

    return (
        <div className={styles.NewsItem}>
            <img src={imgPath} alt={title}></img>

            <div className={styles.NewsItemContent}>
                <p className={styles.NewsItemDate}>{date}</p>

                <p className={styles.NewsItemTitle}>{title}</p>

                <p className={styles.NewsItemDescr}>{descr}</p>
            </div>
        </div>
    )
}

export default NewsItem;