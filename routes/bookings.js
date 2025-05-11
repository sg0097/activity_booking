const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  bookActivity,
  getMyBookings,
} = require('../controllers/bookingController');

router.post('/', auth, bookActivity);
router.get('/mybooking', auth, getMyBookings);

module.exports = router;

