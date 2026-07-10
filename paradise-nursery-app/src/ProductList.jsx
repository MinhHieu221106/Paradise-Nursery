import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import { plantsData } from './products';
import Navbar from './Navbar';

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <Navbar />
      <h1>Our Plants</h1>
      {plantsData.map((category) => (
        <div key={category.category} className="category-section">
          <h2>{category.category}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <div key={plant.name} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  className="add-to-cart-btn"
                  disabled={!!addedItems[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedItems[plant.name] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;