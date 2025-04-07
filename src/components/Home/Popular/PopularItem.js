import React, {useContext} from "react";
import styles from "./PopularItem.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {CartContext} from "../../CartContext";
import {Link} from "react-router-dom";

function PopularItem({imgPath, title, descr, price, id}) {
    const {addToCart} = useContext(CartContext);

    const handleAdd = () => {
        addToCart({
            id: title,
            name: title,
            description: descr,
            price: parseFloat(price.replace(/[^\d.]/g, '')), // "2800 руб" → 2800
            image: imgPath,
        });
    };

    return (
        <Link to={`/readyNabery/${id}`} className={styles.PopularItem} key={id}>
            <img src={imgPath} alt={title}/>

            <div className={styles.PopularItemContent}>
                <p className={styles.PopularItemTitle}>{title}</p>
                <p className={styles.PopularItemDescr}>{descr}</p>

                <div className={styles.PopularItemPriceContainer}>
                    <p className={styles.PopularItemPrice}>{price} ₽</p>

                    <button
                        className={styles.PopularItemButton}
                        onClick={handleAdd}
                    >
                        <FontAwesomeIcon icon={faShoppingBag} style={{width: "13px", height: "19px"}}/>
                        В корзину
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default PopularItem;
