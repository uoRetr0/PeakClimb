import React, { useState } from 'react';
import Header from '../components/Header';
import './Booking.css';

const Booking = () => {
  const [participants, setParticipants] = useState([{ fullname: '', email: '', phone: '' }]);

  const handleAddParticipant = () => {
    setParticipants([...participants, { fullname: '', email: '', phone: '' }]);
  };

  const handleRemoveParticipant = (index) => {
    const newParticipants = participants.filter((_, i) => i !== index);
    setParticipants(newParticipants);
  };

  const handleParticipantChange = (index, field, value) => {
    const newParticipants = [...participants];
    newParticipants[index][field] = value;
    setParticipants(newParticipants);
  };

  return (
    <div>
      <Header />
      <div className="container mt-2 pt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="booking-form-container p-4 shadow rounded">
              <h2 className="text-center mb-4">Book a Climbing Session or Class</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Date:</label>
                  <input type="date" className="form-control" id="date" name="date" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">Time:</label>
                  <input type="time" className="form-control" id="time" name="time" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="skill" className="form-label">Skill Level:</label>
                  <select className="form-select" id="skill" name="skill" required>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="instructor" className="form-label">Instructor:</label>
                  <input type="text" className="form-control" id="instructor" name="instructor" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">Contact Information:</label>
                  <div className="contact-info">
                    <input type="text" className="form-control mb-2" id="fullname" name="fullname" placeholder="Full Name" required />
                    <input type="email" className="form-control mb-2" id="email" name="email" placeholder="Email Address" required />
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone Number" required />
                  </div>
                </div>
                <button type="submit" className="btn btn-custom-orange w-100">Book Now</button>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="group-booking-container p-4 shadow rounded">
              <h3 className="text-center mb-3">Group Booking</h3>
              {participants.map((participant, index) => (
                <div key={index} className="mb-3">
                  <div className="mb-2">
                    <label className="form-label">Participant {index + 1}</label>
                    {index > 0 && (
                      <button
                        type="button"
                        className="btn btn-danger btn-sm float-end"
                        onClick={() => handleRemoveParticipant(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Full Name"
                    value={participant.fullname}
                    onChange={(e) => handleParticipantChange(index, 'fullname', e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email Address"
                    value={participant.email}
                    onChange={(e) => handleParticipantChange(index, 'email', e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    value={participant.phone}
                    onChange={(e) => handleParticipantChange(index, 'phone', e.target.value)}
                    required
                  />
                </div>
              ))}
              <button type="button" className="btn btn-secondary mb-3 w-100" onClick={handleAddParticipant}>
                Add Another Participant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
