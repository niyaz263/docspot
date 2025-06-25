const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availableSlots: { type: [String], required: true },  // Array of time slots
  location: { type: String, required: true },
});

module.exports = mongoose.model('Provider', ProviderSchema);
