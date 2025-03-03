//Larisa 
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, dispatch } = useCart();
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Your cart is empty</p> : cart.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity || 1}</p>
                    <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;