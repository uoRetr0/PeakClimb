import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './Schedule.css';

const Schedule = () => {
  const [schedule, setSchedule] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  });

  useEffect(() => {
    const savedSchedule = JSON.parse(localStorage.getItem('schedule'));
    if (savedSchedule) {
      setSchedule(savedSchedule);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  const renderTimeSlots = (day) => {
    const times = [
      '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
      '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
      '6:00 PM', '7:00 PM'
    ];
    return times.map(time => {
      const session = schedule[day]?.find(slot => slot.time === time);
      return (
        <div key={time} className="time-slot p-2 mb-2">
          <div className="time-label">{time}</div>
          {session && (
            <div className="session bg-custom-orange text-white p-2 mt-1">
              {session.session}
            </div>
          )}
        </div>
      );
    });
  };

  const handleAddSession = () => {
    window.location.href = '/PeakClimb/explore';
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2 className="text-center mb-4">View Your Schedule</h2>
        <div className="row justify-content-center">
          {Object.keys(schedule).map(day => (
            <div key={day} className="day-card p-3 shadow-sm mb-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="day-title mb-0">{day}</h4>
                <button
                  className="add-session btn btn-custom-orange btn-sm"
                  onClick={handleAddSession}
                >
                  + Add
                </button>
              </div>
              {renderTimeSlots(day)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
