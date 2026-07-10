import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-page">
      <Navbar />
      <h1>Shopping Cart</h1>

      <div className="cart-summary">
        <p>Total Items: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.name} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(item)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
        <Link to="/products">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default CartItem;