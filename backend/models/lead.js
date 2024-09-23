const mongoose = require('mongoose');

// Mongoose schema for storing lead information
const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    serviceType: { type: String, required: true },
    budgetRange: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
