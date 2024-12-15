const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample product data
  
const products = [
  {
    id: 1,
    name: "Laptop",
    description:
      "High-performance laptop: Powerful computer with fast processor, dedicated graphics card, ample RAM for demanding tasks like gaming, video editing, and professional work.",
    price: 48000,
    image: "https://m.media-amazon.com/images/I/61nTNphSBvL._SL1500_.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    description:
      "Latest model smartphone: Advanced mobile device with high-resolution camera, 5G connectivity, powerful processor, large OLED display, and advanced AI features.",
    price: 36000,
    image: "https://m.media-amazon.com/images/I/610Q2I5Or8L._SL1500_.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description:
      "Noise-cancelling headphones: Audio device that electronically blocks external sounds, providing immersive listening experience with high-quality sound for music, calls, and travel.",
    price: 12000,
    image: "https://m.media-amazon.com/images/I/61WOKwqQDwL._SL1500_.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    description:
      "Stylish smartwatch: Wearable device tracking fitness, displaying notifications, monitoring health metrics, with customizable watch faces and smartphone integration.",
    price: 9000,
    image: "https://m.media-amazon.com/images/I/71Iit7U1S+L._SL1500_.jpg",
  },
  {
    id: 5,
    name: "Keyboard",
    description:
      "Mechanical gaming keyboard: Precise input device with tactile mechanical switches, offering faster response times, durability, and customizable RGB lighting for gamers.",
    price: 5400,
    image: "https://m.media-amazon.com/images/I/61ziLoDHf9S._SL1500_.jpg",
  },
  {
    id: 6,
    name: "Mouse",
    description:
      "Ergonomic wireless mouse: Comfortable computer peripheral with contoured design, reducing hand strain, featuring wireless connectivity and adjustable sensitivity.",
    price: 1800,
    image: "https://m.media-amazon.com/images/I/61t9BQyeJkS._SL1000_.jpg",
  },
  {
    id: 7,
    name: "Monitor",
    description:
      "21-inch 4K monitor: Large display with ultra-high resolution, providing sharp image quality for graphic design, gaming, and multimedia consumption.",
    price: 18000,
    image: "https://m.media-amazon.com/images/I/71ZwpYLCIML._SL1500_.jpg",
  },
  {
    id: 8,
    name: "Tablet",
    description:
      "Lightweight tablet for reading: Portable device with e-reader capabilities, high-resolution screen, long battery life, ideal for digital books and casual browsing.",
    price: 45000,
    image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SL1500_.jpg",
  },
  {
    id: 9,
    name: "Camera",
    description:
      "Digital camera with lens: Professional-grade photography equipment with interchangeable lenses, high-resolution sensor, advanced image processing capabilities.",
    price: 30000,
    image: "https://m.media-amazon.com/images/I/916GGqnsG+L._SL1500_.jpg",
  },
  {
    id: 10,
    name: "Speaker",
    description:
      "Portable Bluetooth speaker: Wireless audio device with rechargeable battery, compact design, offering high-quality sound for outdoor and indoor use.",
    price: 4800,
    image: "https://m.media-amazon.com/images/I/71rY4KQ5EtL._SL1500_.jpg",
  },
  {
    id: 11,
    name: "Projector",
    description:
      "Mini projector for home theater: Compact device that projects large, high-resolution images onto walls or screens, ideal for home entertainment and presentations.",
    price: 7260,
    image: "https://m.media-amazon.com/images/I/41Cg0VM5cML._SL1000_.jpg",
  },
  {
    id: 12,
    name: "Gaming Chair",
    description:
      "Comfortable gaming chair: Ergonomically designed seat with adjustable features, lumbar support, and cushioning for long gaming or work sessions.",
    price: 9000,
    image: "https://m.media-amazon.com/images/I/61MnFbUEs9L._SL1500_.jpg",
  },
  {
    id: 13,
    name: "Smart Bulb",
    description:
      "Color-changing LED bulb: Smart lighting solution controllable via smartphone, offering multiple color options and adjustable brightness.",
    price: 960,
    image: "https://m.media-amazon.com/images/I/51gln06+z4L._SL1080_.jpg",
  },
  {
    id: 14,
    name: "Fitness Tracker",
    description:
      "Fitness tracker: Wearable device monitoring physical activity, heart rate, sleep patterns, and providing personalized health insights.",
    price: 3600,
    image: "https://m.media-amazon.com/images/I/71qq-p26D4L._SL1500_.jpg",
  },
  {
    id: 15,
    name: "Drone",
    description:
      "Camera-equipped drone: Remote-controlled aerial device with built-in high-resolution camera for photography, videography, and recreational flying.",
    price: 24000,
    image: "https://m.media-amazon.com/images/I/61qMZAPI1fL._SL1200_.jpg",
  },
  {
    id: 16,
    name: "VR Headset",
    description:
      "Virtual reality headset: Immersive technology device creating interactive 3D environments for gaming, training, and entertainment.",
    price: 15000,
    image: "https://m.media-amazon.com/images/I/51UZ47oy7SL._SL1000_.jpg",
  },
  {
    id: 17,
    name: "Smart Thermostat",
    description:
      "Wi-Fi enabled smart thermostat: Internet-connected temperature control device allowing remote adjustment, energy tracking, and automated climate management.",
    price: 7800,
    image: "https://m.media-amazon.com/images/I/51HyMY+qdpL._SL1000_.jpg",
  },
  {
    id: 18,
    name: "Router",
    description:
      "High-speed Wi-Fi router: Network device providing fast, reliable internet connectivity for multiple devices across home or office.",
    price: 4200,
    image: "https://m.media-amazon.com/images/I/51DhuxAov-L._SL1212_.jpg",
  },
  {
    id: 19,
    name: "Electric Kettle",
    description:
      "Fast boiling electric kettle: Kitchen appliance quickly heating water with precise temperature control, energy efficiency, and modern design.",
    price: 1800,
    image: "https://m.media-amazon.com/images/I/51Q11RNy8dL._SL1200_.jpg",
  },
  {
    id: 20,
    name: "Coffee Maker",
    description:
      "Automatic coffee maker: Programmable device brewing coffee with minimal user intervention, offering features like scheduling, strength control, and self-cleaning.",
    price: 5400,
    image: "https://m.media-amazon.com/images/I/71J5wMqo46L._SL1500_.jpg",
  },
];




// Routes
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/", (req, res) => {
  res.json({message:'hi'});
});


// Backend route to fetch product details by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10); // Get the ID from the URL
  const product = products.find(p => p.id === productId); // Find the product by ID
  if (product) {
    res.json(product); // Return the product details
  } else {
    res.status(404).send('Product not found'); // Return an error if product is not found
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
