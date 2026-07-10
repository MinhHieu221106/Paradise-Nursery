import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>
        Where you can find a variety of plants and get your green thumb 
        going! Discover our wide selection of houseplants, perfect for 
        beginners and plant enthusiasts alike.
      </p>
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Các route /products và /cart sẽ thêm ở Task 6 và Task 7 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;