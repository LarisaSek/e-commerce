const clearCart = () => {
    setCart([]);
};

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles.css";

const OrderPage = () => {
    const { clearCart } = useContext(CartContext);
    
    return (
        <div className="order-confirmation">
            <h2>Order Confirmed! 🎉</h2>
            <p>Thank you for your purchase. Your order has been placed successfully.</p>
            <p>We appreciate your business and hope to see you again soon.</p>
            <Link to="/" className="back-button" onClick={clearCart}>Back to Home</Link>
        </div>
    );
};

export default OrderPage;
