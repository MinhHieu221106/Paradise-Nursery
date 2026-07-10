import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link">
          Cart 🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;