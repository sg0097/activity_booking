const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;

  if (!activityId) {
    return res.status(400).json({ error: 'Activity ID is required' });
  }

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    // ❗ Prevent booking same activity again
    const alreadyBooked = await Booking.findOne({
      user: req.user.id,
      activity: activityId,
    });

    if (alreadyBooked) {
      return res.status(400).json({ error: 'You have already booked this activity' });
    }

    const booking = new Booking({
      user: req.user.id,
      activity: activityId,
    });

    await booking.save();
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error booking activity' });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('activity')
      .exec();

    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user.' });
    }

    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};
