import React from 'react';
import ProductCard from '../components/ProductCard';
import '../assets/styles/Home.css';

const Home = ({ searchQuery, addToCart, products }) => {
  const filteredProducts = products.filter((product) => {
    const name = product.name ? product.name.toLowerCase() : '';
    const description = product.description ? product.description.toLowerCase() : '';
    return name.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
