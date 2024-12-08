import React from 'react';

const Cart = ({ item, increaseQty, decreaseQty, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <div className="cart-controls">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Cart;
