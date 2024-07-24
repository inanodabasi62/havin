const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { sendVerificationCode } = require('../services/twoFactorAuth');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { name, email, password, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword, phone });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const verificationCode = crypto.randomBytes(3).toString('hex');
      user.verificationCode = verificationCode;
      await user.save();
      await sendVerificationCode(user.phone, verificationCode);
      res.status(200).json({ userId: user._id, message: 'Verification code sent' });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/verify', async (req, res) => {
  const { userId, verificationCode } = req.body;
  try {
    const user = await User.findById(userId);
    if (user && user.verificationCode === verificationCode) {
      res.status(200).json({ message: 'Verification successful' });
    } else {
      res.status(400).json({ error: 'Invalid verification code' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
