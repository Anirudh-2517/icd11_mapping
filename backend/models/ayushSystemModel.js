const mongoose = require('mongoose');

const ayushSystemSchema = new mongoose.Schema({
  system_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  abbreviation: {
    type: String,
    required: true
  },
  origin_country: {
    type: String,
    required: true
  },
  no_of_practitioners: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
});

module.exports = mongoose.model('AyushSystem', ayushSystemSchema);