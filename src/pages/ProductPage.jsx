import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../data/api";
import { useCart } from "../context/CartContext";
import "../styles.css";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch } = useCart();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchProductById(id).then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-page">
            {/* ✅ Product Image on the Left */}
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>

            {/* ✅ Product Details on the Right */}
            <div className="product-info">
                <h2>{product.title}</h2>
                <p className="category">Category: {product.category}</p>

                {/* ✅ Styled Price */}
                <p className="price">{product.price.toFixed(2)} kr</p>

                {/* ✅ Quantity Selector */}
                <div className="quantity-container">
                    <p>Quantity</p>
                    <div className="quantity-controls">
                        <button 
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="quantity-btn"
                        >-</button>
                        <span>{quantity}</span>
                        <button 
                            onClick={() => setQuantity(q => q + 1)}
                            className="quantity-btn"
                        >+</button>
                    </div>
                </div>

                {/* ✅ Add to Cart Button */}
                <button 
                    className="add-to-cart"
                    onClick={() => dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } })}
                >
                    Add to cart
                </button>

                {/* ✅ Product Description */}
                <p className="description">{product.description}</p>
                
                {/* ✅ Product ID (optional) */}
                <p className="product-id">Product ID: {product.id}</p>
            </div>
        </div>
    );
};

export default ProductPage;
