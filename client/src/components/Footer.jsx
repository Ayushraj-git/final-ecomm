// In Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import '../assets/styles/Footer.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 My Store. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
