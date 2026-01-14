# Adhitya Ayurveda – Backend (MERN)

This is a drop-in Express + MongoDB backend tailored to the uploaded React/Vite frontend.  
It provides two API areas used by the UI forms:

- **Contact**: `POST /api/contact` – stores contact messages.
- **Bookings**: `POST /api/bookings` – confirms a booking (with simulated payment) and returns a booking reference.  
  Optional: `POST /api/bookings/quote` – calculate totals for given dates/room/treatment.
  Optional: `GET /api/bookings/ref/:reference` – fetch a booking by reference.

> Prices mirror the labels in the Booking page: Premier $150/night, Deluxe $120/night, Standard $90/night; treatments — Shirodhara $90, Nasya $75, Consultation $50. Taxes are 10% for demonstration.

## Quick start

```bash
cd adhitya-ayurveda-backend
cp .env.example .env
# edit .env with your MongoDB URI and dev client URL (Vite defaults to http://localhost:5173)
npm install
npm run dev
```

The API will start on `http://localhost:5000` by default.

## Environment

- `PORT` – server port (default 5000)
- `MONGODB_URI` – Mongo connection string
- `CLIENT_URL` – allowed origin for CORS (set to your Vite dev URL or production domain)

## Integration snippets

### Contact form (src/pages/ContactPage.tsx)

```ts
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  const res = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed');
  alert(data.message);
}
```

### Booking confirmation (src/pages/BookingPage.tsx)

```ts
async function handlePayAndConfirm() {
  const payload = {
    ...formData,               // firstName, lastName, email, phone, checkIn, checkOut, roomType, guests, treatment, specialRequests
    payment: {
      method: paymentMethod,   // 'card' | 'paypal' | 'upi'
      cardNumber,              // only if method === 'card' (last4 is stored; full number is NOT saved)
    },
  };
  const res = await fetch('http://localhost:5000/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed');
  // use data.booking.reference in your confirmation step
}
```

## Folder structure

```
adhitya-ayurveda-backend/
├── .env.example
├── package.json
├── server.js
└── src
    ├── config
    │   └── db.js
    ├── middleware
    │   └── error.js
    ├── models
    │   ├── Booking.js
    │   └── ContactMessage.js
    ├── routes
    │   ├── bookings.js
    │   └── contact.js
    └── utils
        └── pricing.js
```

## Notes

- Payments are **simulated**; no third‑party gateway is used. Only `last4` and a detected brand are stored for cards.
- All inputs are validated server-side; dates must produce at least one night.
- CORS is restricted to `CLIENT_URL` (set in `.env`). For local dev with Vite, use `http://localhost:5173`.
- Production tip: behind a proxy, also set `app.set('trust proxy', 1)` and tune the rate‑limiter.

MIT ©
