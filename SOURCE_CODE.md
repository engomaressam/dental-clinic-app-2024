# Dental Clinic Management System - Source Code

This repository contains a comprehensive dental clinic management system built with Node.js and Express.

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/engomaressam/dental-clinic-app-2024.git
cd dental-clinic-app-2024
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env file with your configuration
```

4. Start the application:
```bash
npm run dev  # For development
npm start    # For production
```

## Features

- **Patient Management**: Complete patient records and history
- **Doctor Management**: Doctor profiles and schedules
- **Appointment Scheduling**: Advanced appointment management
- **Inventory Tracking**: Medical supplies and equipment tracking
- **Dashboard Analytics**: Real-time clinic statistics
- **Dual Database Support**: MongoDB or local JSON storage

## Technology Stack

- Node.js & Express.js
- EJS templating
- Bootstrap 5 UI
- MongoDB with Mongoose
- Local JSON fallback storage

## Project Structure

```
src/
├── controllers/     # Business logic
├── models/         # Database models
├── routes/         # API routes
├── views/          # EJS templates
├── public/         # Static assets
├── db/             # Database utilities
├── config.js       # Configuration
└── server.js       # Main application
```

## License

ISC License - see package.json for details.