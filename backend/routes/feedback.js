const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  const { email, feedback } = req.body;
  const newFeedback = new Feedback({ email, feedback });

  try {
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
