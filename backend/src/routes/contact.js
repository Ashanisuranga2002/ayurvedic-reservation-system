// src/routes/contact.js
const express = require('express');
const router = express.Router();
const validator = require('validator');
const ContactMessage = require('../models/ContactMessage');

router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      res.status(400);
      throw new Error('name, email, subject and message are required');
    }
    if (!validator.isEmail(email)) {
      res.status(400);
      throw new Error('Invalid email address');
    }
    if (message.length < 10) {
      res.status(400);
      throw new Error('Message should be at least 10 characters');
    }

    const doc = await ContactMessage.create({
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      phone: phone ? String(phone).trim() : undefined,
      subject: String(subject).trim(),
      message: String(message).trim(),
    });

    res.status(201).json({
      ok: true,
      message: 'Thanks! Your message has been received. We will get back to you shortly.',
      id: doc._id,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
