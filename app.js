const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

const activityRoutes = require('./routes/activity');
app.use('/api/activity', activityRoutes);

const activityRoute = require('./routes/activity');
app.use('/api/activities', activityRoute);


const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);

const bookingRoute = require('./routes/bookings');
app.use('/api/mybooking', bookingRoute);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
