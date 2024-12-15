import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import '../assets/styles/Home.css';

const Home = ({ searchQuery, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // For loading state
  const [error, setError] = useState(null);      // For error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); 
        setProducts(response.data); // Set the products data
        setLoading(false);           
      } catch (error) {
        setError('Failed to fetch products'); // Set error message if the request fails
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const name = product.name ? product.name.toLowerCase() : '';
    const description = product.description ? product.description.toLowerCase() : '';
    return name.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      {loading ? (
        <p>Loading products...</p> // Display loading message while fetching
      ) : error ? (
        <p>{error}</p> // Display error message if fetch fails
      ) : (
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
