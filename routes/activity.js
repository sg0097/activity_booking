// routes/activity.js
const express = require('express');
const router = express.Router();
const { addActivity, getActivities } = require('../controllers/activityController');

// POST /api/activities - Add new activity
router.post('/', addActivity);

// GET /api/activities - List all activities
router.get('/', getActivities);

module.exports = router;
