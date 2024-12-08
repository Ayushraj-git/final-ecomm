// ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // to get the product ID from URL
import '../assets/styles/ProductDetails.css'; // Add your styling

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams(); // Get the product ID from the URL params
  const product = products.find(product => product.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="product-details-price">${product.price}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
