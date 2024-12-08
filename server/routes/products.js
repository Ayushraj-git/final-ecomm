const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop", price: 799.99, image: "https://via.placeholder.com/300x200?text=Laptop" },
  { id: 2, name: "Smartphone", description: "Latest model smartphone", price: 599.99, image: "https://via.placeholder.com/300x200?text=Smartphone" },
  { id: 3, name: "Headphones", description: "Noise-cancelling headphones", price: 199.99, image: "https://via.placeholder.com/300x200?text=Headphones" },
  { id: 4, name: "Smartwatch", description: "Stylish smartwatch", price: 149.99, image: "https://via.placeholder.com/300x200?text=Smartwatch" },
  { id: 5, name: "Keyboard", description: "Mechanical gaming keyboard", price: 89.99, image: "https://via.placeholder.com/300x200?text=Keyboard" },
  { id: 6, name: "Mouse", description: "Ergonomic wireless mouse", price: 29.99, image: "https://via.placeholder.com/300x200?text=Mouse" },
  { id: 7, name: "Monitor", description: "27-inch 4K monitor", price: 299.99, image: "https://via.placeholder.com/300x200?text=Monitor" },
  { id: 8, name: "Tablet", description: "Lightweight tablet for reading", price: 249.99, image: "https://via.placeholder.com/300x200?text=Tablet" },
  { id: 9, name: "Camera", description: "Digital camera with lens", price: 499.99, image: "https://via.placeholder.com/300x200?text=Camera" },
  { id: 10, name: "Speaker", description: "Portable Bluetooth speaker", price: 79.99, image: "https://via.placeholder.com/300x200?text=Speaker" },
  { id: 11, name: "Projector", description: "Mini projector for home theater", price: 120.99, image: "https://via.placeholder.com/300x200?text=Projector" },
  { id: 12, name: "Gaming Chair", description: "Comfortable gaming chair", price: 150.00, image: "https://via.placeholder.com/300x200?text=Gaming+Chair" },
  { id: 13, name: "Smart Bulb", description: "Color-changing LED bulb", price: 15.99, image: "https://via.placeholder.com/300x200?text=Smart+Bulb" },
  { id: 14, name: "Fitness Tracker", description: "Track your fitness goals", price: 59.99, image: "https://via.placeholder.com/300x200?text=Fitness+Tracker" },
  { id: 15, name: "Drone", description: "Camera-equipped drone", price: 399.99, image: "https://via.placeholder.com/300x200?text=Drone" },
  { id: 16, name: "VR Headset", description: "Virtual reality headset", price: 249.99, image: "https://via.placeholder.com/300x200?text=VR+Headset" },
  { id: 17, name: "Smart Thermostat", description: "Wi-Fi enabled thermostat", price: 129.99, image: "https://via.placeholder.com/300x200?text=Smart+Thermostat" },
  { id: 18, name: "Router", description: "High-speed Wi-Fi router", price: 69.99, image: "https://via.placeholder.com/300x200?text=Router" },
  { id: 19, name: "Electric Kettle", description: "Fast boiling kettle", price: 29.99, image: "https://via.placeholder.com/300x200?text=Electric+Kettle" },
  { id: 20, name: "Coffee Maker", description: "Automatic coffee maker", price: 89.99, image: "https://via.placeholder.com/300x200?text=Coffee+Maker" }
];

router.get('/', (req, res) => {
  res.json(products);
});
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
