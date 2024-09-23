const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (your frontend)
app.use(express.static(path.join(__dirname, '../')));  // This serves static files like index.html from the root folder

// Routes for the API
app.use('/api/leads', leadRoutes);

// Catch-all route to serve index.html for any unknown routes (like for client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html')); // Ensure index.html is in the root folder
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
