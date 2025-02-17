import styles from './HeroItem.module.css'

function HeroItem(props) {
    const {imgUrl, text} = props;

    return (
        <div className={styles.HeroItem}>
            <img src={imgUrl} alt={text}/>

            <p className={styles.HeroItemText}>{text}</p>
        </div>

    )
}

export default HeroItem