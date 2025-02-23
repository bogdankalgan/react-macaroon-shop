import React, {useContext} from "react";
import {CartContext} from "../CartContext";
import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";

function Cart() {
    const {cartItems, removeFromCart} = useContext(CartContext);

    return (
        <section>
            <Header/>
            <BreadCrumbs/>

            <h2>Корзина</h2>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Цена: {item.price} ₽</p>
                            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                        </div>
                    ))}
                    <button>Очистить корзину</button>
                </div>
            ) : (
                <p>Корзина пуста</p>
            )}
        </section>
    );
}

export default Cart;
