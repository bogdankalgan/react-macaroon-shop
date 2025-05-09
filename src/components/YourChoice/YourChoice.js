import {useCreateDesign} from "../DesignContext";
import PinkButton from "../Corporatives/PinkButton";
import {useCart} from "../CartContext";
import styles from "./YourChoice.module.css";
import {useNavigate} from "react-router-dom";

function YourChoice() {
    const { baseCount, basePrice, selectedExtras} = useCreateDesign();
    const {addToCart} = useCart();
    const navigate = useNavigate();

    const basePriceSafe = Number(basePrice) || 0;
    const totalExtras = selectedExtras.reduce((sum, i) => {
        const price = Number(i.price) || 0;
        const count = Number(i.count) || 0;
        return sum + price * count;
    }, 0);
    const total = basePriceSafe + totalExtras;


    const handleAddToCart = () => {
        const cartItem = {
            id: Date.now(),
            name: `Набор макарон ${baseCount} шт.`,
            price: total,
            quantity: 1,
            extras: selectedExtras,
        }

        addToCart(cartItem)

        navigate('/create-design/ready-modal')
    }

    const RUB_TO_USD = 0.011;
    const convert = (rub) => Math.round(rub * RUB_TO_USD * 100);

    const handleCheckout = async () => {
        const res = await fetch("https://stripe-back-beta.vercel.app/api/create-checkout-session", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
               line_items: [
                   {
                       price_data: {
                           product_data: {
                               name: `Набор макарон ${baseCount} шт`
                           },
                           unit_amount: convert(basePrice),
                           currency: "usd",
                       },
                       quantity: 1
                   },
                   ...selectedExtras.map(item => ({
                       price_data: {
                           currency: "usd",
                           product_data: {
                               name: item.title
                           },
                           unit_amount: convert(item.price)
                       },
                       quantity: item.count
                   }))
               ],
                billing_address_collection: "required",
                shipping_address_collection: {
                   allowed_countries: ["US", "RU"]
                }
            })
        })

        const data = await res.json()
        if(data.url) {
            window.location.href = data.url;
        }
    }


    return (
        <div className={styles.YourChoiceContainer}>
            <div className={styles.YourChoice}>
                <h2 className="titleSecond" style={{marginBottom: "19px"}}>Ваш выбор: </h2>

                <div className={styles.YourChoiceContent}>
                    <p className={styles.YourChoiceTitle}>
                        Набор макарон {baseCount} шт. с индивидуальным дизайном{" "}
                        <span>{basePriceSafe.toLocaleString()} руб.</span>
                    </p>

                    <div className={styles.YourChoiceItems}>
                        {selectedExtras.map(item => (
                            <p key={item.id} className={styles.YourChoiceItem}>
                                {item.title}{" "}
                                <span>{(Number(item.price) * Number(item.count)).toLocaleString()} руб.</span>
                            </p>
                        ))}
                    </div>

                    <div className={ styles.YourChoiceTotal}>
                        <p>
                            Итого: <span>{total.toLocaleString()} руб.</span>
                        </p>
                    </div>
                </div>

                <div className={styles.YourChoiceButtons}>
                    <button onClick={handleAddToCart}>Добавить в корзину</button>
                    <div onClick={handleCheckout}>
                        <PinkButton text={"Оформить сейчас"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourChoice;