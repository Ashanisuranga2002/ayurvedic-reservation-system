// src/routes/bookings.js
const express = require('express');
const dayjs = require('dayjs');
const validator = require('validator');
const Booking = require('../models/Booking');
const { calculateTotal } = require('../utils/pricing');

const router = express.Router();

function makeReference() {
  const ymd = dayjs().format('YYYYMMDD');
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `AYUR-${ymd}-${rand}`;
}

function detectCardBrand(num) {
  const n = (num || '').replace(/\s+/g, '');
  if (/^4\d{12}(\d{3})?$/.test(n)) return 'visa';
  if (/^5[1-5]\d{14}$/.test(n)) return 'mastercard';
  if (/^3[47]\d{13}$/.test(n)) return 'amex';
  if (/^6(?:011|5\d{2})\d{12}$/.test(n)) return 'discover';
  return 'card';
}

function parsePositiveInt(v, def = 1) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n > 0 ? n : def;
}

// POST /api/bookings/quote
router.post('/quote', async (req, res, next) => {
  try {
    const { checkIn, checkOut, roomType, treatment = 'none' } = req.body || {};
    if (!checkIn || !checkOut || !roomType) {
      res.status(400);
      throw new Error('checkIn, checkOut and roomType are required');
    }
    if (!['premier', 'deluxe', 'standard'].includes(roomType)) {
      res.status(400);
      throw new Error('Invalid roomType');
    }
    const pricing = calculateTotal({ roomType, checkIn, checkOut, treatment });
    if (pricing.nights <= 0) {
      res.status(400);
      throw new Error('checkOut must be after checkIn');
    }
    res.json({ ok: true, pricing });
  } catch (err) {
    next(err);
  }
});

// POST /api/bookings
router.post('/', async (req, res, next) => {
  try {
    const {
      firstName, lastName, email, phone,
      checkIn, checkOut, roomType, guests,
      treatment = 'none', specialRequests = '',
      payment = {},
    } = req.body || {};

    // Basic validation
    const required = { firstName, lastName, email, phone, checkIn, checkOut, roomType };
    for (const [k, v] of Object.entries(required)) {
      if (!v) {
        res.status(400);
        throw new Error(`${k} is required`);
      }
    }
    if (!validator.isEmail(email)) {
      res.status(400);
      throw new Error('Invalid email');
    }
    if (!['premier', 'deluxe', 'standard'].includes(roomType)) {
      res.status(400);
      throw new Error('Invalid roomType');
    }
    const guestsNum = parsePositiveInt(guests, 1);

    const pricing = calculateTotal({ roomType, checkIn, checkOut, treatment });
    if (pricing.nights <= 0) {
      res.status(400);
      throw new Error('checkOut must be after checkIn');
    }

    // Simulated payment capture
    const method = payment?.method || 'card';
    if (!['card', 'paypal', 'upi'].includes(method)) {
      res.status(400);
      throw new Error('Invalid payment method');
    }
    let paymentDoc = { method, status: 'captured' };
    if (method === 'card') {
      const num = payment?.cardNumber || '';
      const last4 = (num.replace(/\s+/g, '').slice(-4) || '');
      paymentDoc.card = { brand: detectCardBrand(num), last4 };
    }
    paymentDoc.txnId = 'TXN-' + Math.random().toString(36).substring(2, 10).toUpperCase();

    const booking = await Booking.create({
      reference: makeReference(),
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: String(email).toLowerCase().trim(),
      phone: String(phone).trim(),
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      roomType,
      guests: guestsNum,
      treatment,
      specialRequests: String(specialRequests || '').trim(),
      pricing,
      status: 'confirmed',
      payment: paymentDoc,
    });

    res.status(201).json({
      ok: true,
      message: 'Booking confirmed',
      booking,
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/bookings/ref/:reference
router.get('/ref/:reference', async (req, res, next) => {
  try {
    const doc = await Booking.findOne({ reference: req.params.reference });
    if (!doc) {
      res.status(404);
      throw new Error('Booking not found');
    }
    res.json({ ok: true, booking: doc });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
