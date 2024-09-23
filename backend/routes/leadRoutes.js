const express = require('express');
const router = express.Router();
const { createLead } = require('../controllers/leadController');

// POST route to create a lead (for form submissions)
router.post('/', createLead);

module.exports = router;
