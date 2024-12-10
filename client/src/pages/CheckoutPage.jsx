import React, { useState } from 'react';
import '../assets/styles/CheckoutPage.css';

const CheckoutPage = ({ cart, removeFromCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.email || !validateEmail(formData.email)) {
      alert('Please fill in all the fields correctly!');
      return;
    }
    alert('Checkout successful!');
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-page-container">
      <h1 className="checkout-page-title">Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="checkout-input"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleInputChange}
          required
          className="checkout-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="checkout-input"
        />
        <button type="submit" className="checkout-submit-btn">Complete Purchase</button>
      </form>
      <div className="checkout-items-container">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <img
              src={item.image}
              alt={item.name}
              className="checkout-item-image"
            />
            <div className="checkout-item-details">
              <h3 className="checkout-item-name">{item.name}</h3>
              <p className="checkout-item-price">${item.price}</p>
              <span className="checkout-item-quantity">Quantity: {item.quantity}</span>
            </div>
            <button
              className="checkout-remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutPage;
