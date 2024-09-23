const express = require('express');
const router = express.Router();
const { createLead, getAllLeads } = require('../controllers/leadController');

// POST route to create a lead (for form submissions)
router.post('/', createLead);

// Optional: GET route to retrieve all leads
router.get('/', getAllLeads);

module.exports = router;
