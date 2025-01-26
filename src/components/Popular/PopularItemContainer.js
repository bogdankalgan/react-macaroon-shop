import React from "react";
import PopularItem from './PopularItem'
import styles from './PopularItemContainer.module.css'

function PopularItemContainer(props) {
    const {items} = props;
    
    return (
        <div className={styles.PopularItemContainer}>
            {items.map((item,) => (
                <PopularItem key={item.id} imgPath={item.imgPath} title={item.title} descr={item.description}
                             price={item.price}/>
            ))}
        </div>
    )
}

export default PopularItemContainer;