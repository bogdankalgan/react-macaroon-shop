import React, {useContext} from "react";
import styles from "./PopularItem.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {CartContext} from "../../CartContext";

function PopularItem({imgPath, title, descr, price, id}) {
    const {addToCart} = useContext(CartContext);

    return (
        <div className={styles.PopularItem} key={id}>
            <img src={imgPath} alt={title}/>

            <div className={styles.PopularItemContent}>
                <p className={styles.PopularItemTitle}>{title}</p>
                <p className={styles.PopularItemDescr}>{descr}</p>

                <div className={styles.PopularItemPriceContainer}>
                    <p className={styles.PopularItemPrice}>{price} ₽</p>

                    <button
                        className={styles.PopularItemButton}
                        onClick={() => addToCart({id, title, price})}
                    >
                        <FontAwesomeIcon icon={faShoppingBag} style={{width: "13px", height: "19px"}}/>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PopularItem;
