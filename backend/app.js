const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// Routes
app.use('/api/leads', leadRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
