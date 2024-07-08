import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-white p-3">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">PeakClimb Gym</div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink exact to="/PeakClimb" className="nav-link text-white" activeClassName="selected">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/PeakClimb/booking" className="nav-link text-white" activeClassName="selected">Booking</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/PeakClimb/explore" className="nav-link text-white" activeClassName="selected">Classes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/PeakClimb/schedule" className="nav-link text-white" activeClassName="selected">My Schedule</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/PeakClimb/info" className="nav-link text-white" activeClassName="selected">Learn</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
