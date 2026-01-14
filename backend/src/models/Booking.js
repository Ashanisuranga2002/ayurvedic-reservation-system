// src/models/Booking.js
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema(
  {
    method: { type: String, enum: ['card', 'paypal', 'upi'], required: true },
    status: { type: String, enum: ['pending', 'captured', 'failed'], default: 'captured' },
    txnId: { type: String },
    card: {
      brand: String,
      last4: String,
    },
  },
  { _id: false }
);

const BookingSchema = new mongoose.Schema(
  {
    reference: { type: String, required: true, unique: true, index: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    roomType: { type: String, enum: ['premier', 'deluxe', 'standard'], required: true },
    guests: { type: Number, min: 1, max: 8, default: 1 },
    treatment: { type: String, enum: ['shirodhara', 'nasya', 'consultation', 'none'], default: 'none' },
    specialRequests: { type: String, trim: true },
    pricing: {
      nights: Number,
      roomRate: Number,
      treatmentFee: Number,
      subtotal: Number,
      taxes: Number,
      total: Number,
    },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'confirmed' },
    payment: PaymentSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
