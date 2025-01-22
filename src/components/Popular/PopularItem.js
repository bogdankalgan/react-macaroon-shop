import React from "react";
import styles from './PopularItem.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";

function PopularItem(props) {
    const {imgPath, title, descr, price, id} = props;


    return (
        <div className={styles.PopularItem} key={id}>
            <img src={imgPath} alt={title}/>

            <div className={styles.PopularItemContent}>
                <p className={styles.PopularItemTitle}>{title}</p>
                <p className={styles.PopularItemDescr}>{descr}</p>

                <div className={styles.PopularItemPriceContainer}>
                    <p className={styles.PopularItemPrice}>{price}</p>

                    <button className={styles.PopularItemButton}><FontAwesomeIcon icon={faShoppingBag} style={{
                        width: "13px",
                        height: "19px"
                    }}/>В корзину
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopularItem;