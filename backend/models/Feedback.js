const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  email: String,
  feedback: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
