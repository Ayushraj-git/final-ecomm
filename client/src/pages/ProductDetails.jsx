import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/ProductDetails.css';
import axios from 'axios';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);  // State to store the product details
  const [error, setError] = useState(null);  // State to handle errors
  const [loading, setLoading] = useState(true);  // State to manage loading

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product details for ID:', id);  // Debugging log
        const response = await axios.get(`/api/products/${id}`); // Proxy should handle this correctly
        console.log('Product data:', response.data);  // Log the response data
        setProduct(response.data);  // Set product data
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching product details:', error.message);  // Log error message
        setError('Failed to fetch product details. Please try again later.');
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchProduct();  // Fetch product details when component mounts
  }, [id]);  // Re-run the effect if product ID changes

  if (loading) {
    return <div>Loading product details...</div>;  // Display loading message
  }

  if (error) {
    return <div className="error-message">{error}</div>;  // Display error message
  }

  if (!product) {
    return <div>Product not found!</div>;  // If no product found, show this message
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="product-details-price">₹{product.price}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
