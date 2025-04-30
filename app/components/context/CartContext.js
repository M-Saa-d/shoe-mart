"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const CartContext = createContext();

// Custom hook to use the context
export const useCart = () => useContext(CartContext);

// CartProvider component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart
        ? JSON.parse(storedCart)
        : { items: [], total: 0 };
    }
    return { items: [], total: 0 };
  });

  // Save cart to localStorage on change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add item to cart
  const addItem = (newItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((item) => item.id === newItem.id);

      let updatedItems;
      if (existingItem) {
        updatedItems = prevCart.items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        updatedItems = [...prevCart.items, newItem];
      }

      const updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return { items: updatedItems, total: updatedTotal };
    });
  };

  // Remove item by ID
  const removeItem = (itemId) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.id !== itemId);
      const updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { items: updatedItems, total: updatedTotal };
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
