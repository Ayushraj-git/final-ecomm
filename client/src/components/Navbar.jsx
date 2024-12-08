// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Importing home, cart, and search icons
import '../assets/styles/Navbar.css'; // Import the Navbar styles

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">MyStore</Link>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">
          <FaHome className="navbar-icon" />
        </Link>
        <Link to="/cart" className="navbar-link">
          <FaShoppingCart className="navbar-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
