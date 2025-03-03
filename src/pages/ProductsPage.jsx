import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // :white_check_mark: Import cart context
import "../styles.css";
const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const { dispatch } = useCart(); // :white_check_mark: Get dispatch for Add to Cart
    // Fetch products from API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data); // Set initial state
            })
            .catch(err => console.error("Error fetching products:", err));
    }, []);
    // :white_check_mark: Filter products when category changes
    useEffect(() => {
        if (category === "All") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter(product => product.category.toLowerCase() === category.toLowerCase())
            );
        }
    }, [category, products]);
    return (
        <div className="container">
            <h2>Our Products</h2>
            {/* :white_check_mark: Category filter dropdown */}
            <div className="filter-container">
                <label htmlFor="category-select">Filter by Category:</label>
                <select
                    id="category-select"
                    className="filter-dropdown"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
            {/* :white_check_mark: Display filtered products */}
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product-wrapper">
                            {/* :white_check_mark: Product Image Box */}
                            <div className="product-item">
                                <img src={product.image} alt={product.title} />
                                {/* :white_check_mark: Add to Cart Button inside frame */}
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
                                >
                                    +
                                </button>
                            </div>
                            {/* :white_check_mark: Title & Price (Outside the border, below the image) */}
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <p className="product-price">{product.price} SEK</p>
                                <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found for this category.</p>
                )}
            </div>
        </div>
    );
};
export default ProductsPage;