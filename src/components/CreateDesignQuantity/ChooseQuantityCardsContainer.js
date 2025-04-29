import ChooseQuantityCard from "./ChooseQuantityCard";
import styles from "./ChooseQuantityCardsContainer.module.css";

function ChooseQuantityCardsContainer() {
    const items = [
        {text: "Набор из 9 макарон с индивидуальным дизайном", price: "950 руб.", amount: 9},
        {text: "Набор из 16 макарон с индивидуальным дизайном", price: "1500 руб.", amount: 16},
        {text: "Набор в форме сердца из 22 макарон с индивидуальным дизайном ", price: "2500 руб.", amount: 22}
    ]

    return (
        <div className={styles.ChooseQuantityCardsContainer}>
            {items.map((item) => {
                return (
                    <ChooseQuantityCard text={item.text} price={item.price} amount={item.amount} key={item.text}/>)
            })}
        </div>
    )
}

export default ChooseQuantityCardsContainer;