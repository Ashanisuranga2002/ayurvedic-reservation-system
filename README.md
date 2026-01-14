# Adhitya Ayurveda - Reservation System

A comprehensive full-stack MERN (MongoDB, Express, React, Node.js) application for managing Ayurvedic clinic reservations, treatments, and patient communications.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)
![React](https://img.shields.io/badge/react-%3E%3D18-61DAFB.svg)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Hierarchy](#project-hierarchy)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

Adhitya Ayurveda is a modern web-based reservation system designed for Ayurvedic wellness centers. It enables patients to browse treatments, check room availability, make appointments, and submit inquiries while providing administrators with comprehensive management tools.

---

## ✨ Features

### For Patients
- **Browse Treatments** - Explore available Ayurvedic treatments with detailed descriptions
- **Check Accommodations** - View room types (Premier, Deluxe, Standard) with pricing
- **Book Appointments** - Real-time booking with flexible date/time selection
- **Contact Management** - Send inquiries and receive responses
- **User Authentication** - Secure login and registration system
- **Booking History** - Track previous and upcoming appointments
- **Multi-language Support** - i18n enabled for global accessibility

### For Administrators
- **Dashboard** - Overview of system metrics and statistics
- **Appointment Management** - View, modify, and cancel bookings
- **User Management** - Manage patient profiles and access
- **Room Management** - Configure available rooms and availability
- **Payment Tracking** - Monitor transactions and payment status
- **Pricing Management** - Dynamic treatment and room pricing

---

## 🏗️ Project Structure

```
ayurvedic-reservation-system/
├── backend/                    # Node.js/Express API server
│   ├── src/
│   │   ├── config/            # Database and app configuration
│   │   ├── middleware/        # Express middleware (error handling, CORS)
│   │   ├── models/            # Mongoose schemas (Booking, Contact)
│   │   ├── routes/            # API endpoints
│   │   └── utils/             # Helper functions (pricing logic)
│   ├── server.js              # Entry point
│   ├── package.json
│   └── README.md
│
└── frontend/                   # React/Vite web application
    ├── src/
    │   ├── components/        # Reusable React components
    │   ├── contexts/          # React Context (Auth)
    │   ├── pages/             # Page components and admin layouts
    │   ├── App.tsx            # Main app component
    │   └── index.tsx          # React DOM render
    ├── public/                # Static assets
    ├── vite.config.ts         # Vite build configuration
    ├── tailwind.config.js     # Tailwind CSS configuration
    ├── package.json
    └── README.md
```

---

## 💻 Tech Stack

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, Rate Limiting
- **Utilities**: Dayjs (date handling), Dotenv (environment management)

### Frontend
- **Library**: React 18.3+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Routing**: React Router v6
- **Internationalization**: i18next
- **Icons**: Lucide React

---

## 📦 Prerequisites

Before starting, ensure you have:

- **Node.js** v18 or higher ([Download](https://nodejs.org))
- **npm** v9 or higher
- **MongoDB** instance (local or cloud - MongoDB Atlas)
- **Git** (optional, for version control)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Ashanisuranga2002/ayurvedic-reservation-system.git
cd ayurvedic-reservation-system
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
# See Configuration section below
```

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install
```

---

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ayurveda_db

# CORS Configuration
CLIENT_URL=http://localhost:5173

# Optional: API Rate Limiting
RATE_LIMIT_WINDOW_MS=15000000
RATE_LIMIT_MAX_REQUESTS=100
```

### MongoDB Connection

- **Local Development**: `mongodb://localhost:27017/ayurveda_db`
- **MongoDB Atlas**: Use connection string from your cluster

---

## 🎬 Running the Application

### Option 1: Development Mode (Recommended)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend runs on: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

### Option 2: Production Mode

**Backend:**
```bash
cd backend
npm run start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Contact Endpoints

#### Submit Contact Message
```
POST /api/contact
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Inquiry about treatments"
}

Response:
{
  "success": true,
  "message": "Message received successfully"
}
```

### Booking Endpoints

#### Create Booking
```
POST /api/bookings
Content-Type: application/json

Body:
{
  "patientName": "John Doe",
  "email": "john@example.com",
  "roomType": "Premier",
  "treatment": "Shirodhara",
  "checkInDate": "2026-02-01",
  "checkOutDate": "2026-02-03",
  "numberOfGuests": 1
}

Response:
{
  "success": true,
  "bookingReference": "BOOK-123456",
  "totalAmount": 450.00
}
```

#### Get Booking by Reference
```
GET /api/bookings/ref/:reference

Response:
{
  "success": true,
  "booking": {
    "_id": "...",
    "bookingReference": "BOOK-123456",
    "patientName": "John Doe",
    "status": "confirmed"
  }
}
```

#### Calculate Quote
```
POST /api/bookings/quote
Content-Type: application/json

Body:
{
  "roomType": "Premier",
  "treatment": "Shirodhara",
  "checkInDate": "2026-02-01",
  "checkOutDate": "2026-02-03"
}

Response:
{
  "roomPrice": 150,
  "treatmentPrice": 90,
  "nights": 2,
  "subtotal": 390,
  "tax": 39,
  "total": 429
}
```

### Pricing Reference

**Rooms:**
- Premier: $150/night
- Deluxe: $120/night
- Standard: $90/night

**Treatments:**
- Shirodhara: $90
- Nasya: $75
- Consultation: $50

**Taxes:** 10% on subtotal

---

## 🔐 Authentication

The application includes:
- **Login Page** - User authentication with credentials
- **Register Page** - New user registration
- **Protected Routes** - Admin-only pages require authentication
- **Auth Context** - Global authentication state management

---

## 📝 Key Files

| File | Purpose |
|------|---------|
| [backend/server.js](backend/server.js) | Express server initialization |
| [backend/src/config/db.js](backend/src/config/db.js) | MongoDB connection |
| [backend/src/models/Booking.js](backend/src/models/Booking.js) | Booking schema |
| [frontend/src/App.tsx](frontend/src/App.tsx) | Main React component |
| [frontend/src/contexts/AuthContext.tsx](frontend/src/contexts/AuthContext.tsx) | Authentication state |

---

## 🧪 Testing

### Verify Backend
```bash
curl http://localhost:5000/api/health
```

### Test Booking Endpoint
```bash
curl -X POST http://localhost:5000/api/bookings/quote \
  -H "Content-Type: application/json" \
  -d '{
    "roomType": "Premier",
    "treatment": "Shirodhara",
    "checkInDate": "2026-02-01",
    "checkOutDate": "2026-02-03"
  }'
```

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB is running
- Check connection string in `.env`
- Ensure IP whitelist includes your address (for MongoDB Atlas)

### Port Already in Use
```bash
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or use a different port
PORT=5001 npm run dev
```

### CORS Errors
- Verify `CLIENT_URL` in backend `.env` matches frontend URL
- Frontend should be `http://localhost:5173`

---

## 📚 Additional Resources

- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Authors

- **Project**: Adhitya Ayurveda Reservation System
- **Repository**: [GitHub](https://github.com/Ashanisuranga2002/ayurvedic-reservation-system)

---

## 📧 Support

For issues, questions, or suggestions:
- Open an [GitHub Issue](https://github.com/Ashanisuranga2002/ayurvedic-reservation-system/issues)
- Contact the development team

---

**Last Updated**: January 2026 | **Version**: 1.0.0
