// src/utils/pricing.js
const dayjs = require('dayjs');

const ROOM_RATES = {
  premier: 150,
  deluxe: 120,
  standard: 90,
};

const TREATMENT_FEES = {
  shirodhara: 90,
  nasya: 75,
  consultation: 50,
  none: 0,
};

function diffNights(checkIn, checkOut) {
  const inDate = dayjs(checkIn);
  const outDate = dayjs(checkOut);
  const nights = outDate.diff(inDate, 'day');
  return nights > 0 ? nights : 0;
}

function calculateTotal({ roomType, checkIn, checkOut, treatment }) {
  const nights = diffNights(checkIn, checkOut);
  const roomRate = ROOM_RATES[roomType] || 0;
  const treatmentFee = TREATMENT_FEES[treatment] ?? 0;

  const subtotal = nights * roomRate + treatmentFee;
  const taxes = Math.round(subtotal * 0.1); // 10% tax example
  const total = subtotal + taxes;

  return { nights, roomRate, treatmentFee, subtotal, taxes, total };
}

module.exports = { ROOM_RATES, TREATMENT_FEES, diffNights, calculateTotal };
