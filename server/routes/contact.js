// src/routes/contact.js

const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// POST route to handle contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate request data
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Create a new contact message instance
    const newContactMessage = new ContactMessage({
      name,
      email,
      message,
    });

    // Save the message to the database
    await newContactMessage.save();

    // Send a success response
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error.message);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
