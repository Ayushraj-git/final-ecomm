import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Importing home, cart, and search icons
import logo from '../assets/images/logo-main.png'; // Import the logo image
import '../assets/styles/Navbar.css'; // Import the Navbar styles

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-title">NOZAMA</span>
        </Link>
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">
          <FaHome className="navbar-icon" />
          <span className="navbar-text">Home</span>
        </Link>
        <Link to="/cart" className="navbar-link">
          <FaShoppingCart className="navbar-icon" />
          <span className="navbar-text">Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
