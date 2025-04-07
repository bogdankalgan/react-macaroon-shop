import React, {useState, useContext} from "react";
import {dataBase} from "../dataBase";
import {CartContext} from "../CartContext";
import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";
import PinkButton from "../Corporatives/PinkButton";
import ChepTogether from "./ChepTogether/ChepTogether";
import DeliveryAndPayment from "./DeliveryAndPayment /DeliveryAndPayment";
import styles from "./Cart.module.css";
import { useApplePay } from "./ApplePayButton";

function Cart() {
    const {cartItems, removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
    const [promoCode, setPromoCode] = React.useState("");
    const [discount, setDiscount] = React.useState(0);
    const [deliveryData, setDeliveryData] = useState({deliveryPrice: 400})

    const parsePrice = (price) => {
        if (typeof price === "number") return price;
        return parseFloat(price.replace(/[^\d.]/g, ""));
    };

    const totalPrice = cartItems.reduce((sum, item) => {
        const price = typeof item.price === "number" ? item.price : parseFloat(item.price.replace(/[^\d.]/g, ""))
        return sum + price * item.quantity
    }, 0)

    const discountedTotal = totalPrice * (1 - discount);
    const finalyTotal = Math.round(discountedTotal + (deliveryData?.delivery === "courier" ? 400 : 0));
    const paymentRequest = useApplePay(Math.round(finalyTotal / 90));

    const checkPromoCode = async (code) => {
        const {data, error} = await dataBase
            .from("promo_codes")
            .select("discount")
            .eq("code", code.toLowerCase())
            .single();

        if (error || !data) {
            return null;
        }
        return data.discount;
    };

    const handleApplyPromo = async () => {
        const foundDiscount = await checkPromoCode(promoCode);
        if (foundDiscount) {
            setDiscount(foundDiscount);
        } else {
            setDiscount(0);
            alert("Промокод не найден");
        }
    };

    const handleOrderSumbit = async (formData) => {
        if (formData.payment === "online") {
            const res = await fetch("https://stripe-back-beta.vercel.app/api/create-checkout-session", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    items: cartItems.map((item) => ({
                        price_id: item.price_id,
                        count: item.quantity
                    }))
                })
            })

            const data = await res.json();
            window.location.href = data.url;

        } else if (formData.payment === "cash") {
            alert("Заказ оформлен! Оплата при получении")
        } else if (formData.payment === "applepay") {
            if (paymentRequest) {
                paymentRequest.show();
            } else {
                alert("Apple Pay недоступен");
            }
        }
    }

    return (
        <section>
            <Header/>
            <BreadCrumbs/>

            <h2 className="titleSecond" style={{textAlign: "center", marginBottom: ""}}>Ваша корзина</h2>
            <div className={styles.Cart}>
                <div>
                    <div className={styles.CartItemsContainer}>
                        {cartItems.length > 0 ? (
                            <div>
                                {cartItems.map((item) => {
                                    const price = parsePrice(item.price);
                                    return (
                                        <div key={item.id} className={styles.CartItem}>
                                            <img src={item.image} alt={item.name} width={100}/>
                                            <div className={styles.CartItemInfo}>
                                                <h4 className={styles.CartItemTitle}>{item.name}</h4>
                                                <p className={styles.CartItemDescr}>{item.description}</p>
                                            </div>

                                            <div className={styles.CartItemCount}>
                                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                                            </div>

                                            <p className={styles.CartItemPrice}>Цена: <span>{price} руб</span></p>

                                            <button onClick={() => removeFromCart(item.id)}
                                                    className={styles.removeButton}>X
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p>Корзина пуста</p>
                        )}

                        <div className={styles.CartItemWithoutDelivery}>
                            <p>Общая стоимость Вашей покупки без учета доставки составит:</p>

                            <p>{totalPrice} руб</p>
                        </div>

                    </div>
                    <ChepTogether/>

                    <div>
                        <DeliveryAndPayment
                            finalTotal={finalyTotal}
                            onUpdate={setDeliveryData}
                            onSubmit={handleOrderSumbit}
                        />
                    </div>
                </div>

                <div className={styles.CartTotal}>
                    <h3 className={styles.CartTotalTitle}>Итого</h3>
                    <p className={styles.CartTotalDescr}>Стоимость товаров
                        ................................. {Math.round(totalPrice)} руб</p>

                    <p className={styles.CartTotalDescr}>Скидка:
                        ................................................................... {Math.round(totalPrice * discount)} руб</p>

                    <p className={styles.CartTotalDescr}>Доставка
                        ..................................................................{Math.round(deliveryData.deliveryPrice)} руб</p>


                    <div className={styles.CartTotalPrice}>
                        <p>К оплате </p>
                        <p>{finalyTotal} руб</p>
                    </div>

                    <div className={styles.CartTotalPromo}>
                        <p>Промокод: </p>
                        <input
                            type="text"
                            placeholder="Введите промокод"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <div onClick={handleApplyPromo}><PinkButton text={'Применить'}/></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;