import React, {useEffect, useState} from "react";
import ApplePayButton from "../ApplePayButton";


function DeliveryAndPayment({onUpdate, finalTotal, onSubmit}) {
    const [state, setState] = useState({
        name: "",
        phone: "",
        adress: "",
        delivery: "",
        payment: "",
        date: "",
        time: "",
        comment: "",
    })

    const deliveryPrice = state.delivery === "delivery" ? 400 : 0;

    useEffect(() => {
        onUpdate({...state, deliveryPrice})
    }, [state, deliveryPrice, onUpdate])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = () => {
        onSubmit(state)
    }

    return (
        <div>
            <div>
                <h3>Доставка</h3>
                <p>Укажите контактные данные и выберите способ доставки</p>
            </div>

            <input name="name" placeholder="Имя" onChange={handleChange}/>
            <input name="phone" placeholder="Телефон" onChange={handleChange}/>

            <h4>Способы доставки</h4>

            <label>
                <input type="radio" name="delivery" value="courier" checked={state.delivery === 'courier'}
                       onChange={handleChange}/>
                Курьерская доставка (400 руб)
            </label>
            <label>
                <input type="radio" name="delivery" value="pickup" checked={state.delivery === 'pickup'}
                       onChange={handleChange}/>
                Самовывоз (бесплатно)
            </label>

            {state.delivery === 'courier' && (
                <input name="adress" placeholder="Адресс доставки" onChange={handleChange}/>
            )}

            <h4>Дата и время:</h4>
            <input type="date" name="date" onChange={handleChange}/>
            <select>
                <option value="12:00-16:00">12:00-16:00</option>
                <option value="16:00-18:00">16:00-18:00</option>
            </select>

            <textarea name="comment"
                      placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое."
                      onChange={handleChange}></textarea>

            <h4>Оплата: </h4>
            <label>
                <input type="radio" name="payment" value="cash" checked={state.payment === "cash"}
                       onChange={handleChange}/>
                Наличными
            </label>

            <label>
                <input type="radio" name="payment" value="online" checked={state.payment === "online"}
                       onChange={handleChange}/>
                Картой онлайн
            </label>

            <label>
                <input type="radio" name="payment" value="applepay" checked={state.payment === "applepay"}
                       onChange={handleChange}/>
                Apple Pay
            </label>

            <div>
                {state.payment === "applepay" ? (
                    <ApplePayButton total={finalTotal}/>
                ) : (
                    <button onClick={handleSubmit}>Оформить заказ</button>
                )}
            </div>
        </div>
    )
}

export default DeliveryAndPayment;