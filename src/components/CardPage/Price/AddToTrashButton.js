import React, { useContext } from "react";
import styles from "../../Home/Popular/PopularItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../CartContext";

function AddToCartButton({ id, title, price, imgPath }) {
    const { addToCart } = useContext(CartContext);

    return (
        <button className={styles.PopularItemButton} onClick={() => addToCart({ id, title, price, imgPath })}>
            <FontAwesomeIcon icon={faShoppingBag} style={{ width: "13px", height: "19px" }} />
            В корзину
        </button>
    );
}

export default AddToCartButton;
