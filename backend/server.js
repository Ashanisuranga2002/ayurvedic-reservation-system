// server.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();
const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json({ limit: '1mb' }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));

const CLIENT_URL = process.env.CLIENT_URL || '*';
app.use(cors({ origin: CLIENT_URL, credentials: false }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

// Health
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'adhitya-ayurveda-backend', time: new Date().toISOString() });
});

// Routes
app.use('/api/contact', require('./src/routes/contact'));
app.use('/api/bookings', require('./src/routes/bookings'));

// Error handler
const { notFound, errorHandler } = require('./src/middleware/error');
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
