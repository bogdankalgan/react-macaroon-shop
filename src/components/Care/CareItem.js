import styles from './CareItem.module.css';

function CareItem(props) {
    const {imgUrl, title, descr} = props;
    return (
        <div className={styles.CareItem}>
            <img src={imgUrl} alt={title}/>

            <p className={styles.CareItemTitle}>{title}</p>
            <p className={styles.CareItemDescr}>{descr}</p>
        </div>
    )
}

export default CareItem;