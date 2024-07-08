import React from 'react';
import Header from '../components/Header';
import './Info.css'; 

const Info = () => (
  <div>
    <Header />
    <div className="info-hero">
      <div className="info-hero-content">
        <h1>Discover the Thrill of Climbing</h1>
        <p>Join us and experience an adventure like no other!</p>
      </div>
    </div>
    <div className="container mt-5">
      <div className="section mb-5">
        <h2 className="text-center text-custom-orange mb-4">How Our Climbing System Works</h2>
        <p className="accent">
          At PeakClimb Gym, we offer a range of climbing experiences tailored to different skill levels. Our climbing walls are equipped with various routes that challenge climbers from beginners to advanced levels. Here’s a quick overview of how you can start climbing with us:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>Step 1: Orientation</h3>
            <p>All new climbers must complete an orientation session. During this session, you'll learn about our facility, safety guidelines, and basic climbing techniques.</p>
          </li>
          <li className="list-group-item">
            <h3>Step 2: Gear Up</h3>
            <p>We provide all the necessary climbing gear including harnesses, shoes, and helmets. Make sure your gear is properly fitted and secure before you start climbing.</p>
          </li>
          <li className="list-group-item">
            <h3>Step 3: Choose Your Route</h3>
            <p>Our walls are color-coded to indicate the difficulty of each route. Start with easier routes and gradually progress to more challenging ones as you build your skills.</p>
          </li>
          <li className="list-group-item">
            <h3>Step 4: Climb Safely</h3>
            <p>Always climb with a partner and use proper belaying techniques. Follow the safety instructions provided during your orientation and from our staff.</p>
          </li>
          <li className="list-group-item">
            <h3>Step 5: Take Classes</h3>
            <p>Join our climbing classes to learn new techniques and improve your skills. We offer classes for all levels, from beginners to advanced climbers.</p>
          </li>
        </ul>
      </div>
      <div className="section mb-5">
        <h2 className="text-center text-custom-orange mb-4">Climbing Levels</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>Beginner</h3>
            <p>Perfect for those who are new to climbing. Learn the basics of climbing techniques, safety, and equipment use.</p>
          </li>
          <li className="list-group-item">
            <h3>Intermediate</h3>
            <p>For climbers with some experience. Improve your climbing skills and take on more challenging routes.</p>
          </li>
          <li className="list-group-item">
            <h3>Advanced</h3>
            <p>Designed for seasoned climbers. Master advanced techniques and push your limits on our most challenging routes.</p>
          </li>
        </ul>
      </div>
      <div className="section">
        <h2 className="text-center text-custom-orange mb-4">Safety Tips</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>Check Your Gear</h3>
            <p>Always inspect your climbing gear before each climb. Look for any signs of wear and tear, and replace any damaged equipment immediately.</p>
          </li>
          <li className="list-group-item">
            <h3>Warm Up</h3>
            <p>Perform a proper warm-up routine to prepare your muscles and joints for climbing. Stretching and light exercises can help prevent injuries.</p>
          </li>
          <li className="list-group-item">
            <h3>Follow the Rules</h3>
            <p>Adhere to all gym rules and regulations. They are in place to ensure your safety and the safety of others. Listen to the instructions of our staff at all times.</p>
          </li>
          <li className="list-group-item">
            <h3>Stay Hydrated</h3>
            <p>Climbing can be physically demanding. Make sure to drink plenty of water before, during, and after your climbing session to stay hydrated.</p>
          </li>
          <li className="list-group-item">
            <h3>Know Your Limits</h3>
            <p>Don’t push yourself beyond your physical limits. If you feel tired or unwell, take a break. It’s important to climb safely and responsibly.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Info;
