import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const incrementItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decrementItem = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
    } else {
      newCartItems.splice(index, 1); // Remove item from cart
    }
    setCartItems(newCartItems);
  };

  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, itemIndex) => itemIndex !== index);
    setCartItems(newCartItems); 
  }

  const clearCart = () => {
    setCartItems([]);
  };

  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, incrementItem, decrementItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
