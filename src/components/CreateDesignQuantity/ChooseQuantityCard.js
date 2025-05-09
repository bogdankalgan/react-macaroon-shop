import styles from './ChooseQuantityCard.module.css'
import {useNavigate} from "react-router-dom";
import {useCreateDesign} from "../DesignContext";

function ChooseQuantityCard({text, price, amount}) {
    const navigate = useNavigate();
    const {setAmount, setBaseCount, setBasePrice} = useCreateDesign();

    const onClick = () => {
        setBaseCount(amount)
        setBasePrice(Number(price))
        setAmount(amount)
        navigate("/create-design/choose-img")
    }

    return (
        <button className={styles.ChooseQuantityCard} onClick={onClick}>
            <div className={styles.ChooseQuantityCardImg}></div>

            <p className={styles.ChooseQuantityCardTitle}>{text}</p>

            <p className={styles.ChooseQuantityCardPrice}>{price} руб</p>
        </button>
    )
}

export default ChooseQuantityCard;