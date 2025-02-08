import styles from './HolidaysItem.module.css';

function HolidaysItem(props) {
    const {imgUrl, text, animationDelay} = props;

    return (
        <div className={styles.HolidaysItem} style={{whiteSpace: 'pre-wrap', animationDelay: animationDelay}}>
            <img src={imgUrl} alt={imgUrl}/>
            <p>{text}</p>
        </div>
    )
}

export default HolidaysItem;