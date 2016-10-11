const mongoose = require('mongoose');
const User = require('../models/user');

const donationSchema = mongoose.Schema({
  amount: Number,
  method: String,
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
