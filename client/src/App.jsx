import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CheckoutPage from "./pages/CheckoutPage";
import "./assets/styles/index.css";
import axios from 'axios';

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setLoading(false);  // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setError('Failed to fetch products');  // Set error message if request fails
        setLoading(false);  // Set loading to false even if there's an error
      }
    };
  
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (productId, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Loading and error handling
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <Navbar onSearch={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              searchQuery={searchQuery}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              handleQuantityChange={handleQuantityChange}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails products={products} addToCart={addToCart} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
