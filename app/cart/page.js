"use client";

import React, { useState } from "react";
import { useCart } from "@/app/components/context/CartContext";
import "@/app/custom-bootstrap.scss";

const CartPage = () => {
  const { cart, removeItem } = useCart(); // Assuming addItem exists
  const [alertMessage, setAlertMessage] = useState("");

  const handleRemoveItem = (id) => {
    removeItem(id);
    setAlertMessage("Item has been removed from your cart.");
    setTimeout(() => setAlertMessage(""), 500); // Clear the message after 3 seconds
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {/* Display alert message */}
      {alertMessage && <div className="alert alert-info">{alertMessage}</div>}

      {cart.items.length === 0 ? (
        <p className="text-center text-bold">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  {item.name} × {item.quantity}
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleRemoveItem(item.id)}
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h4>Total: ${cart.total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
};

export default CartPage;
