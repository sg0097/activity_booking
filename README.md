# activity_booking
# 🗓️ Activity Booking API

This is a simple Node.js REST API for registering users, adding activities, and booking them, built with Express.js and MongoDB.

## 🚀 Features

- ✅ User registration and login with JWT authentication
- ✅ Secure password hashing with bcrypt
- ✅ Add, list, and prevent duplicate activity entries
- ✅ Book activities (with checks for duplicates per user)
- ✅ List your own bookings
- ✅ Input validation using express-validator
- ✅ Proper folder structure (models, routes, controllers, middleware)
- ✅ `.env` for environment configuration


## 📁 Project Structure

├── app.js
├── .env.example
├── config/
│ └── db.js
├── controllers/
│ ├── authController.js
│ ├── activityController.js
│ └── bookingController.js
├── middleware/
│ └── auth.js
├── models/
│ ├── User.js
│ ├── Activity.js
│ └── Booking.js
├── routes/
│ ├── auth.js
│ ├── activities.js
│ └── bookings.js
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/activity_booking.git
cd activity_booking


### 2. Install dependencies
bash
Copy
Edit
npm install

### 3. Create .env file
Create a .env file in the root directory using .env.example as a reference:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


### 4. Start the server

npm start
Or with nodemon: npx nodemon app.js

🛠️ API Endpoints
🔐 Auth
POST /api/auth/register – Register a new user

POST /api/auth/login – Login and get a JWT

📝 Activities
GET /api/activities – List all activities

POST /api/activities – Add new activity (requires JWT)

📚 Bookings
POST /api/bookings – Book an activity (requires JWT)

GET /api/bookings/mybooking – View your bookings (requires JWT)

Include JWT as a bearer token in headers:
Authorization: Bearer <your_token>

🧪 Testing
Use Postman or Thunder Client for testing all endpoints.

🌐 Deployment
You can host it for free using: Render
our hosted url :- https://activity-booking-i1ro.onrender.com

🙌 Author
Shivam Gupta


