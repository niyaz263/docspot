import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ providerId }) => {
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/appointments/book', {
      userId: 'USER_ID', // Replace with actual user id
      providerId,
      appointmentTime
    })
    .then(res => alert(res.data.message))
    .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Select Appointment Time" 
        value={appointmentTime} 
        onChange={(e) => setAppointmentTime(e.target.value)} 
        required 
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookingForm;
