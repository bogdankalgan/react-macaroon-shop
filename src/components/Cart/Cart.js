import React, {useContext} from "react";
import {CartContext} from "../CartContext";
import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";

function Cart() {
    const {cartItems, removeFromCart, clearCart} = useContext(CartContext);

    return (
        <section>
            <Header/>
            <BreadCrumbs/>

            <h2>Корзина</h2>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} style={{border: "1px solid #ccc", padding: "10px", margin: "10px"}}>
                            <img src={item.image} alt={item.name} width="100"/>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Цена: {item.price} ₽</p>
                            <p>Количество: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                        </div>
                    ))}
                    <button onClick={clearCart}>Очистить корзину</button>
                </div>
            ) : (
                <p>Корзина пуста</p>
            )}
        </section>
    );
}

export default Cart;
