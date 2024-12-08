// src/components/CheckoutForm.jsx
import React from 'react';

const CheckoutForm = () => {
  return (
    <form className="checkout-form">
      <h2>Checkout</h2>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Address:
        <input type="text" />
      </label>
      <label>
        Credit Card Number:
        <input type="text" />
      </label>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default CheckoutForm;
