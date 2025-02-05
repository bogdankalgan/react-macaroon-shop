import styles from "./CatalogItem.module.css";

function CatalogItem(props) {
    const {text, imgSrc} = props;

    return (
        <div className={styles.catalogItem}>
            <img src={imgSrc} alt={text}/>

            <p className={styles.catalogItemText}>{text}</p>
        </div>
    )
}

export default CatalogItem