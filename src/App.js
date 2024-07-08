import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Explore from './pages/Explore';
import Info from './pages/Info';
import Schedule from './pages/Schedule';
import './App.css';

const App = () => (
  <Routes>
    <Route path="PeakClimb/" element={<Home />} />
    <Route path="PeakClimb/booking" element={<Booking />} />
    <Route path="PeakClimb/explore" element={<Explore />} />
    <Route path="PeakClimb/info" element={<Info />} />
    <Route path="PeakClimb/schedule" element={<Schedule />} />
  </Routes>
);

export default App;
