import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch } = useCart();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: SEK {product.price}</p>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;
