import React, {useContext} from "react";
import {CartContext} from "./components/CartContext";

function Cart() {
    const {cartItems, removeFromCart} = useContext(CartContext);

    return (
        <section>
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
