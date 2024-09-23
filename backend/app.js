// server.js or app.js (backend)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const leadRoutes = require('./routes/leadRoutes'); // Import your lead routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Define Routes
app.use('/api/leads', leadRoutes);

// Default route to ensure server is running
app.get('/', (req, res) => {
    res.send("API is working!");
});

// MongoDB connection (replace with your MongoDB URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running`);
});
