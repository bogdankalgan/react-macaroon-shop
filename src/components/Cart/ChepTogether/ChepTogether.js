import React, {useContext, useState} from "react";
import {CartContext} from "../../CartContext";
import styles from "./ChepTogther.module.css";

function ChepTogether() {
    const cheapItems = [
        {
            id: "extra-eclairs",
            name: "Набор эклеров",
            image: "./img/chepTogether/1.png",
            price: 400,
            originalPrice: 600
        },

        {
            id: "extra-tubes",
            name: "Набор трубочек со сгущёнкой",
            image: "./img/chepTogether/2.png",
            price: 400,
            originalPrice: 900
        }
    ]

    const stars = [
        {
            src: "../icons/chepTohether/star1.svg"
        },
        {
            src: "../icons/chepTohether/star2.svg"
        },
        {
            src: "../icons/chepTohether/star3.svg"
        },
        {src: "../icons/chepTohether/star4.svg"},
        {
            src: "../icons/chepTohether/star5.svg",
        },
    ]

    const {addToCart} = useContext(CartContext);
    const [quantities, setQuantities] = useState(
        Object.fromEntries(cheapItems.map(item => [item.id, 0]))
    )

    const handleChange = (id, delta) => {
        setQuantities((prev) => {
            const newQty = Math.max(0, prev[id] + delta);

            if (delta > 0) {
                const item = cheapItems.find((i) => i.id === id)
                addToCart({
                    ...item, quantity: 1
                })
            }

            return {...prev, [id]: newQty}
        })
    }

    return (
        <div>
            <div className={styles.ChepTogtherContainer}>
                <div className={styles.ChepTogther}>
                    <h3>Вместе дешевле!</h3>
                    <img src='../icons/chepTohether/arrow.svg' alt=""></img>

                    <div className={styles.ChepTogtherStars}>
                        {stars.map((star, i) => (
                            <img key={i} src={star.src} alt=""></img>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.ChepTogetherItems}>
                {cheapItems.map((item) => (
                    <div key={item.id} className={styles.ChepTogetherItem}>
                        <div className={styles.ChepTogetherItemTitle}>
                            <img src={item.image} alt={item.id}></img>
                            <p>{item.name}</p>
                        </div>
                        <div className={styles.ChepTogetherItemButtons}>
                            <button onClick={() => handleChange(item.id, -1)}>-</button>
                            <span>{quantities[item.id]}</span>
                            <button onClick={() => handleChange(item.id, 1)}>+</button>
                        </div>
                        <div className={styles.ChepTogetherItemPrice}>
                            <span>{item.originalPrice} руб</span>
                            <span>Цена: <span>{item.price} руб</span></span>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ChepTogether