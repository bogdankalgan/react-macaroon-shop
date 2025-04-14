import {createContext, useState, useContext} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
            if (itemExists) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id ? {...cartItem, quantity: (cartItem.quantity || 1) + 1} : cartItem
                );
            }
            return [...prevItems, {...item, quantity: 1}];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const increaseQuantity = (id) => {
        setCartItems((prev) => prev.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item))
    }

    const decreaseQuantity = (id) => {
        setCartItems((prev) => prev.map((item) => item.id === id ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1)
        } : item))
    }

    const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

    return (
        <CartContext.Provider
            value={{cartItems, addToCart, removeFromCart, clearCart, cartCount, increaseQuantity, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);