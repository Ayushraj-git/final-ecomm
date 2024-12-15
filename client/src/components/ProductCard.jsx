import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [clickedAddToCart, setClickedAddToCart] = useState(false);
  const [clickedViewDetails, setClickedViewDetails] = useState(false);

  const handleAddToCartClick = () => {
    if (clickedAddToCart) return; // Prevent multiple clicks while it's in "clicked" state

    setClickedAddToCart(true);  // Set button to "clicked" state
    addToCart(product); // Add the item to the cart
    
    setTimeout(() => {
      setClickedAddToCart(false);  // Reset button after 500ms (slightly longer for user feedback)
    }, 500); // Set a short timeout to re-enable button
  };

  const handleViewDetailsClick = () => {
    setClickedViewDetails(true);
    setTimeout(() => setClickedViewDetails(false), 300); // Reset after 300ms
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-info">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
      </Link>
      <div className="product-info">
        <p className="product-description">{product.description}</p>
        <p className="product-price">₹{product.price}</p>
        <div className="product-actions">
          <button
            className={`add-to-cart-btn ${clickedAddToCart ? 'clicked' : ''}`}
            onClick={handleAddToCartClick}
            disabled={clickedAddToCart} 
          >
            {clickedAddToCart ? "Added" : "Add to Cart"}
          </button>
          <Link
            to={`/product/${product.id}`}
            className={`view-details-btn ${clickedViewDetails ? 'clicked' : ''}`}
            onClick={handleViewDetailsClick}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
