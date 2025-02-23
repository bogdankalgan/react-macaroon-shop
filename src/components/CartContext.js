import {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider value={{cartItems, addToCart, cartCount}}>
            {children}
        </CartContext.Provider>
    );
};
