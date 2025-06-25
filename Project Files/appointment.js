const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  appointmentTime: { type: String, required: true },
  status: { type: String, default: 'pending' },  // "pending", "confirmed", "completed"
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
