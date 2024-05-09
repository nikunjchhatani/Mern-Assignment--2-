// contents.js

const express = require('express');
const router = express.Router();
const Content = require('../models/Content');
const authController = require('../controllers/authController');

// Protected route - Example of how to use authMiddleware
router.get('/protected-route', authController.authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Add your content routes here

module.exports = router;
