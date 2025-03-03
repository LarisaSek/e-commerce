//Larisa 
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles.css";

const CartPage = () => {
    const { cart, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCompletePurchase = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        navigate("/order-confirmation");
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            {/* ✅ Product Image (Left Side) */}
                            <img src={item.image} alt={item.title} className="cart-item-image" />

                            {/* ✅ Product Details (Middle) */}
                            <div className="cart-details">
                                <p className="cart-item-title">{item.title}</p>
                                <p className="price">{item.price} SEK</p>
                            </div>

                            {/* ✅ Quantity Controls & Remove Button (Right Side) */}
                            <div className="cart-actions">
                                <div className="quantity-controls">
                                    <button
                                        onClick={() => dispatch({
                                            type: "UPDATE_QUANTITY",
                                            payload: { id: item.id, quantity: item.quantity - 1 }
                                        })}
                                        disabled={item.quantity <= 1}
                                    >-</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch({
                                            type: "UPDATE_QUANTITY",
                                            payload: { id: item.id, quantity: item.quantity + 1 }
                                        })}
                                    >+</button>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* ✅ Centered Buttons */}
            {cart.length > 0 && (
                <button onClick={handleCompletePurchase} className="complete-purchase">
                    Complete Purchase
                </button>
            )}

            <div className="cart-footer">
                <Link to="/" className="back-button">Back to Products</Link>
            </div>
        </div>
    );
};

export default CartPage;
