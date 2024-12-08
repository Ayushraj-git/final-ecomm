import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to product details
import '../assets/styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-info">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      </Link>
      <div className="product-info">
        
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          {/* View Details Button */}
          <Link to={`/product/${product.id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
