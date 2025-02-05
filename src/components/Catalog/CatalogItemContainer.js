import CatalogItemHead from './CatalogItemHead';
import CatalogItem from './CatalogItem';
import styles from './CatalogItemContainer.module.css';


function CatalogItemContainer() {
    const items = [
        {text: 'Трубочки со сгущенкой', imgSrc: "./img/catalog-item/2.png"},
        {text: 'Эклеры', imgSrc: "./img/catalog-item/3.png"},
        {text: 'Профитроли', imgSrc: "./img/catalog-item/4.png"},
    ]
    return (
        <div className={styles.CatalogItemContainer}>
            <CatalogItemHead/>
            <div className={styles.CatalogItemContainerBottom}>
                {items.map((item) => {
                    return (
                        <CatalogItem text={item.text} imgSrc={item.imgSrc} key={item.text}/>)
                })}
            </div>
        </div>
    )
}

export default CatalogItemContainer;