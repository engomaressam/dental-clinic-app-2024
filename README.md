# Dental Clinic Management System

A comprehensive web-based dental clinic management system built with Node.js, Express, and EJS. The system supports both MongoDB and local JSON file storage, making it flexible for different deployment scenarios.

## Features

### 📋 Patient Management
- Add, edit, and delete patient records
- Search patients by name, phone, or email
- View patient appointment history
- Manage patient appointments directly from patient profiles

### 👨‍⚕️ Doctor Management
- Manage doctor profiles with specializations
- View doctor-specific dashboards with statistics
- Track doctor schedules and appointments
- Delete doctors with automatic appointment cleanup

### 📅 Appointment Management
- Schedule, reschedule, and cancel appointments
- View appointments by date and doctor
- Track appointment status (pending, confirmed, completed, cancelled)
- Doctor schedule management with time slot availability

### 📦 Inventory Management
- Track medical supplies and equipment
- Monitor stock levels with low-stock alerts
- Add/subtract inventory quantities
- Usage tracking by doctor and item
- Comprehensive usage history reports

### 📊 Dashboard & Analytics
- Real-time dashboard with key metrics
- Today's appointments overview
- Patient and doctor statistics
- Low stock item alerts
- Recent activity summaries

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Bootstrap 5
- **Database**: MongoDB (with Mongoose) or Local JSON files
- **Session Management**: Express Session
- **Date Handling**: Day.js
- **Development**: Nodemon for hot reloading

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (optional - can use local JSON storage)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/engomaressam/dental-clinic-app-2024.git
   cd dental-clinic-app-2024
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   
   # MongoDB Configuration (optional)
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dental_clinic
   
   # Use local JSON storage instead of MongoDB
   USE_LOCAL_DB=true
   ```

4. **Start the application**
   
   For development:
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
dental-clinic-management-system/
├── src/
│   ├── controllers/          # Route controllers
│   ├── models/              # Database models
│   ├── routes/              # Express routes
│   ├── views/               # EJS templates
│   ├── public/              # Static assets
│   ├── db/                  # Database utilities
│   ├── config.js            # Configuration
│   └── server.js            # Main server file
├── data/                    # Local JSON storage
├── package.json
└── README.md
```

## Usage

### Database Options

The system supports two database options:

1. **MongoDB**: Set `USE_LOCAL_DB=false` and provide `MONGODB_URI`
2. **Local JSON**: Set `USE_LOCAL_DB=true` (default)

### Key Features

- **Responsive Design**: Works on desktop and mobile devices
- **Dual Storage**: Seamlessly switch between MongoDB and local JSON
- **Real-time Updates**: Live dashboard with current statistics
- **Comprehensive Search**: Search across patients, doctors, and appointments
- **Inventory Tracking**: Full inventory management with usage history

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please open an issue on GitHub.