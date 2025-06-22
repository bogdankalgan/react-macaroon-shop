import React, {useContext} from "react";
import PopularItem from './PopularItem'
import styles from './PopularItemContainer.module.css'
import {CartContext} from "../../CartContext";


function PopularItemContainer(props) {
    const {items} = props;
    const {addToCart} = useContext(CartContext);
    const {hidden} = props

    if(hidden) return null

    else {
        return (
            <div className={styles.PopularItemContainer}>
                {items.map((item,) => (
                    <PopularItem key={item.id} id={item.id} imgPath={item.imgPath} title={item.title} descr={item.description}
                                 price={item.price} onClick={() => addToCart(item)} price_id={item.price_id}/>
                ))}
            </div>
        )
    }
}

export default PopularItemContainer;