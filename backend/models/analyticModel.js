const mongoose = require('mongoose');

const analyticSchema = new mongoose.Schema({
  metric_name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Analytics', analyticSchema);