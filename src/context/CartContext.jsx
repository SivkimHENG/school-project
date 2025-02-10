import  { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'

export const CartContext = createContext();

export  const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  function addToCart(item) {
    const isItemInCart = cartItems.find((i) => item.id === i);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) => {
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        })
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(item) {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    }
  }

  function clearFromCart() {
    setCartItems([]);
  }

  function getCartTotal() {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }

  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.getItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearFromCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};


CartProvider.prototype = {
  children: PropTypes.node.isRequired,
}