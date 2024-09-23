require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db'); // MongoDB connection
const leadRoutes = require('./routes/leadRoutes'); // Routes for leads
const cors = require('cors');

const app = express();

app.use(cors());

// Middleware for parsing JSON requests
app.use(express.json());

// Lead routes
app.use('/api/leads', leadRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
