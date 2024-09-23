const Lead = require('../models/lead');

// Controller to create a new lead
exports.createLead = async (req, res) => {
    try {
        const { name, email, serviceType, budgetRange } = req.body;
        const newLead = new Lead({ name, email, serviceType, budgetRange });

        // Save the lead to the database
        await newLead.save();

        // Send a success response
        res.status(201).json({ message: 'Lead created successfully', lead: newLead });
    } catch (err) {
        // Send an error response if something goes wrong
        res.status(500).json({ message: 'Error creating lead', error: err.message });
    }
};
