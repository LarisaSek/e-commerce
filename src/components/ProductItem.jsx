import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 

const ProductItem = ({ product }) => {
    const { dispatch } = useCart();

    return (
        <div className="product-item">
            {}
            <img src={product.image} alt={product.title} />

            {}
            <div className="product-info">
                <h3>{product.title}</h3>
                <span className="product-price">{product.price} SEK</span>
                <Link to={`/product/${product.id}`} className="view-details">
                    View Details
                </Link>
            </div>

            {}
            <button 
                className="add-to-cart-btn" 
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            >
                +
            </button>
        </div>
    );
};

export default ProductItem;
