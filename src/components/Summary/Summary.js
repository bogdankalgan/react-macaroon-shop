import {useNavigate, useLocation} from "react-router-dom";
import {useState} from "react";
import {useCart} from "../CartContext";
import PinkButton from "../Corporatives/PinkButton";
import PopularButton from "../Home/Popular/PopularButton";
import Modal from "./Modal";
import styles from './Summary.module.css'

function Summary({count, tastes,}) {
    const navigate = useNavigate();
    const {addToCart} = useCart();
    const location = useLocation();
    const extras = location.state?.extras || [];
    const [modal, setModal] = useState(false);

    const flavorList = Object.entries(tastes.flavors || {}).map(([key, count]) => ({
        name: key,
        count,
    }));

    const flavorNameMap = {
        'season-1': 'Шоколад, банан',
        'season-2': 'Облепиха, розмарин',
        'season-3': 'Чёрный трюфель',
        'season-4': 'Голубой сыр',
        'season-5': 'Пармезан',
        'season-6': 'Песто',
        'season-7': 'Шоколад, банан',
        'season-8': 'Облепиха, розмарин',
        'season-9': 'Чёрный трюфель',
        'regular-1': 'Ананас',
        'regular-2': 'Яблоко',
        'regular-3': 'Вишня',
        'regular-4': 'Кокос',
        'regular-5': 'Пармезан',
        'regular-6': 'Чесночок',
    };


    const extraList = extras || [];

    const totalExtrasPrice = extraList.reduce((acc, item) => acc + item.price, 0)

    const basePrice = parseInt(count?.price) || 0;
    const totalPrice = basePrice + totalExtrasPrice;

    const handleCheckout = async () => {
        console.log("Кнопка нажата");

        try {
            const res = await fetch("https://stripe-back-beta.vercel.app/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    items: [{price_id: "price_123", count: 1}]
                })
            });

            if (!res.ok) throw new Error("Ошибка при запросе");

            const data = await res.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                alert("Ошибка: не получен URL оплаты");
            }
        } catch (err) {
            console.error("Checkout error:", err);
            alert("Произошла ошибка при оплате");
        }
    };


    return (
        <div className={styles.SummaryContaienr}>
            {!modal && (
                <div className={styles.Summary}>
                    <h1>Ваш Выбор: </h1>

                    <p className={styles.SummaryTitle}>Набор макарон {count.count} шт. <span>{count.price} </span></p>

                    {flavorList.map((item, idx) => {
                        return (
                            <p key={idx} className={styles.SummaryChoose}>
                                {flavorNameMap[item.name] || item.name} {item.count} шт.
                            </p>
                        )
                    })}

                    {extraList.map((item, idx) => (
                        <p key={idx} className={styles.SummaryExtras}>
                            {item.title} <span>{item.count} шт.</span>
                        </p>
                    ))}


                    <div className={styles.SummaryTotal}>
                        <p>Итого: <span>{totalPrice} руб</span></p>
                    </div>

                    <div className={styles.SummaryBtn}>
                        <div onClick={handleCheckout}>
                            <PopularButton text="Оформить сейчас"/>
                        </div>

                        <div onClick={() => {
                            addToCart({
                                id: Date.now(),
                                count: count.count,
                                price: totalPrice,
                                flavors: flavorList,
                                extras: extraList,
                            });
                            setModal(true);
                        }}>
                            <PinkButton text="Добавить в корзину"/>
                        </div>
                    </div>
                </div>
            )}
            {modal && <Modal count={count.count} onClose={() => setModal(false)} onGoHome={() => navigate("/")}
                             onGoCart={() => navigate("/cart")}/>}
        </div>
    )
}

export default Summary;