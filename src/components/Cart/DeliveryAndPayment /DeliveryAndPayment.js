import React, {useEffect, useState} from "react";
import styles from "./DeliveryAndPayment.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PinkButton from "../../Corporatives/PinkButton";

function DeliveryAndPayment({onUpdate, finalTotal, onSubmit}) {
    const [state, setState] = useState({
        name: "",
        phone: "",
        address: "",
        delivery: "",
        payment: "",
        date: "",
        time: "",
        comment: "",
    })

    const deliveryPrice = state.delivery === "courier" ? 400 : 0;

    useEffect(() => {
        onUpdate({...state, deliveryPrice})
    }, [state, deliveryPrice, onUpdate])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prev) => ({...prev, [name]: value}))
    }

    const saveOrder = async () => {
        try {
            if (!(state.date instanceof Date) || !state.time) {
                console.warn("Дата или время не выбраны, пропускаем сохранение заказа");
                return alert("Пожалуйста, выберете дату и время")
            }


            const formatDeliveryDate = () => {
                if(!state.date || !state.time) {
                    return null
                }

                const months = ["января", "февраля", "марта", "апреля", "мая", "июня",
                    "июля", "августа", "сентября", "октября", "ноября", "декабря"]

                const dateObj = new Date(state.date)
                const day = dateObj.getDate()
                const month = months[dateObj.getMonth()]
                const year = dateObj.getFullYear()

                return `${day} ${month} ${year}, ${state.time}`
            }


            const response = await fetch("https://cyglhgqybviyjypsovlm.supabase.co/rest/v1/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5Z2xoZ3F5YnZpeWp5cHNvdmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxOTk0NzEsImV4cCI6MjA1MTc3NTQ3MX0.EYtNK0qHV4_z5ehpHClFCV-FGOplqoaSXfPwj2bpaZ8",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5Z2xoZ3F5YnZpeWp5cHNvdmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxOTk0NzEsImV4cCI6MjA1MTc3NTQ3MX0.EYtNK0qHV4_z5ehpHClFCV-FGOplqoaSXfPwj2bpaZ8",
                    "Prefer": "return=representation"
                },
                body: JSON.stringify( {
                    set_name: finalTotal?.items?.map(item => item.name).join(", ")  || "Заказ с сайта",
                    customer_name: state.name,
                    phone: state.phone,
                    delivery_method: state.delivery,
                    delivery_datetime: formatDeliveryDate(),
                    comment: state.comment,
                    payment_method: state.payment,
                    delivery_adress: state.address,
                })
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.error("Ошибка базы данных рот ебал: ", errorText);
            } else {
                console.log("Твой ебаный заказ сохранен")
            }

            const text = await response.text();
            if(!text) {
                console.error("пустой ответ от supabase")
                return
            }

            const result = JSON.parse(text)
            const order  = result[0];

            await fetch("https://twilio-sms-sigma.vercel.app/api/send-sms", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    phone: state.phone,
                    message: `Твой заказ N${order.id} принят. Сходи нахуй хахахаха`
                })
            })

            console.log("заказ сохранен и сообщение отправлено")
        } catch (error) {
            console.error("ошибка при сохранении заказа",error)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();



        if(state.payment === "cash") {
            await saveOrder();
            alert("Ваш заказ оформлен, оплата наличными")
            return
        }

        const items = finalTotal?.items || []
        if(!items.length) {
            console.error("❌ Нет товаров для оформления оплаты")
            return alert("Ошибка: товары не найдены")
        }

        const usdRate = 90

        const line_items = items.map((item) => {
            const name = item.name || "Набор";
            const description = item.description || "";
            const quantity = item.quantity || item.count || 1;

            let amountUsd = Math.round((item.price / usdRate) * 100)
            if(amountUsd < 50) amountUsd = 50

            return {
                price_data: {
                    currency: "usd",
                    unit_amount: amountUsd,
                    product_data: {
                        name,
                        ...(description.trim() ? {description} : {})
                    },
                },
                quantity
            }
        })

        if(state.payment === "online") {
            try {
                const response = await fetch("https://stripe-back-beta.vercel.app/api/create-checkout-session", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ line_items })
                })

                const data = await response.json();
                if(data.url) {
                    await saveOrder();
                    window.location.href = data.url;
                } else {
                    throw new Error("Stripe session URL не получен")
                }
            } catch (error) {
                console.error("Ошибка при создании сессии Stripe:", error);
                alert("Произошла ошибка при создании оплаты. Пожалуйста, попробуйте позже.");
            }
        }

        if(state.payment === "applepay") {
            const totalAmountRub = typeof finalTotal === 'object' ? Number(finalTotal.total) : Number(finalTotal);

            const totalAmountUsd = Math.round(totalAmountRub / usdRate);

            if(!totalAmountUsd || isNaN(totalAmountUsd) || totalAmountUsd <= 0) {
                console.error("❌ Неверная сумма для Apple Pay (usd):", totalAmountUsd);
                return alert("Ошибка: сумма заказа не определена или отрицательная")
            }

            console.log("⏳ Проверка Apple Pay: USD = ", totalAmountUsd);

            if(!window.Stripe) {
                return alert("Apple Pay не поддерживается в этом браузере или устройстве")
            }

            const stripe = window.Stripe("pk_test_51R6DaOH6MqYhcDi3LMz3N61TkFdRnv0RHY2TjArdkQ95KSiF04zBKhlaiAuDtp7m9nFzFwZhoutY3UGKOpN7SiG800k1x8r7KN")

            const paymentRequest = stripe.paymentRequest({
                country: 'US',
                currency: "usd",
                total: {
                    label: "Сумма заказа",
                    amount: totalAmountUsd * 100,
                },
                requestPayerName: true,
                requestPayerEmail: true,
            })

            const canMakePayment = await paymentRequest.canMakePayment()
            console.log("✅ Результат canMakePayment:", canMakePayment)
            if(canMakePayment) {
                await saveOrder();
                paymentRequest.show()
            } else {
                alert("Apple Pay недоступен")
            }
        }
    }

    return (
        <div>
            <div>
                <h3 className="titleSecond">Доставка</h3>
                <p className={styles.DeliveryAndPaymentDescr}>Укажите контактные данные и выберите способ доставки</p>
            </div>

            <form className={styles.DeliveryAndPaymentForm} onSubmit={handleSubmit}>
                <div className={styles.DeliveryAndPaymentBlock}>
                <label className={styles.DeliveryAndPaymentLabel}>
                    Ваше имя*
                    <input name="name" placeholder="Имя" onChange={handleChange} required={true}/>
                </label>

                <label className={styles.DeliveryAndPaymentLabel}>
                    Ваш телефон*
                    <input name="phone" placeholder="+7 (___) ___-__-__" onChange={handleChange} required={true}/>
                </label>
                </div>

                <div>
                <h4 className={styles.DeliveryAndPaymentSubtitle}>Способы доставки:</h4>
                    <div className={styles.DeliveryRadioGroup}>
                      <label
                        className={`${styles.DeliveryRadio} ${
                          state.delivery === "courier" ? styles.DeliveryRadioActive : ""
                        }`}
                      >
                          <img src="/icons/deliveryAndPayment/1.svg" alt=""/>
                          <div>
                        <input
                          type="radio"
                          name="delivery"
                          value="courier"
                          checked={state.delivery === "courier"}
                          onChange={handleChange}
                        />
                        <span>Курьерская доставка</span>
                        <p>400 руб.</p>
                          </div>
                      </label>

                      <label
                        className={`${styles.DeliveryRadio} ${
                          state.delivery === "pickup" ? styles.DeliveryRadioActive : ""
                        }`}
                      >
                          <img src="/icons/deliveryAndPayment/2.svg" alt=""/>
                          <div>
                              <input
                                  type="radio"
                                  name="delivery"
                                  value="pickup"
                                  checked={state.delivery === "pickup"}
                                  onChange={handleChange}
                              />
                              <span>Самовывоз</span>
                              <p>Бесплатно</p>
                          </div>
                      </label>
                    </div>
                </div>
                {state.delivery === 'courier' && (
                    <label className={styles.DeliveryAndPaymentLabel}>
                        Адрес доставки
                        <input name="address" placeholder="Адрес доставки" onChange={handleChange}/>
                    </label>
                )}

                <div className={styles.DeliveryAndPaymentBlock}>
                <label className={styles.DeliveryAndPaymentLabel}>
                    Дата получения
                <DatePicker
                    selected={state.date}
                    onChange={(date) => setState((prev) => ({ ...prev, date }))}
                    dateFormat='dd.MM.yyyy'
                    placeholderText="Выберете дату"
                />
                </label>

                <label className={styles.DeliveryAndPaymentLabel}>
                Время
                <select name="time" value={state.time} onChange={handleChange}>
                    <option value="12:00:00">12:00-16:00</option>
                    <option value="16:00:00">16:00-18:00</option>
                </select>
                </label>
                </div>

                <label className={styles.DeliveryAndPaymentLabel}>
                    Комментарий к заказу
                <textarea name="comment"
                          placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое."
                          onChange={handleChange}></textarea>
                </label>

                <div className={styles.DeliveryPayment}>
                    <h4>Способы оплаты: </h4>

                    <div className={styles.PaymentMethodGroup}>
                        <label data-testid="payment-method-label">
                            <input type="radio" name="payment" value="online" checked={state.payment === "online"} onChange={handleChange}/>
                            <span>Оплата картой онлайн</span>
                        </label>

                        <label>
                            <input type="radio" name="payment" value="cash" checked={state.payment === "cash"} onChange={handleChange}/>
                            <span>Наличными при получении</span>
                        </label>

                        <label>
                            <input type="radio" name="payment" value="applepay" checked={state.payment === "applepay"} onChange={handleChange}/>
                            <span>ApplePay</span>
                        </label>
                    </div>

                    <div className={styles.DeliveryPaymentTotal}>
                        <p>
                            {state.delivery === "courier" ? "Итоговая сумма заказа вместе с доставкой: " : "Итоговая сумма заказа: "}
                        </p>
                        <p>{finalTotal.total} руб</p>
                    </div>

                    <div onClick={handleSubmit}>
                        <PinkButton text="Оформить заказ"/>
                    </div>
                </div>

                <p>
                    Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с Договором оферты и разрешаю обработку моих персональных данных в соответствии с Политикой конфиденциальности
                </p>
            </form>
        </div>
    )
}

export default DeliveryAndPayment;
