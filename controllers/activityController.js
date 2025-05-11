// controllers/activityController.js
const Activity = require('../models/Activity');

// Add New Activity
exports.addActivity = async (req, res) => {
  try {
    const { title, description, location, date, time } = req.body;

    if (!title || !description || !location || !date || !time) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Prevent duplicate activity at same time
    const existing = await Activity.findOne({ title, date, time });
    if (existing) {
      return res.status(400).json({ error: 'Activity with same title and time already exists' });
    }

    const activity = new Activity({ title, description, location, date, time });
    await activity.save();

    res.status(201).json({ message: 'Activity created successfully', activity });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get All Activities
exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
};
