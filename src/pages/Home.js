import React from 'react';
import Header from '../components/Header';
import './Home.css';

const Home = () => (
  <div>
    <Header />
    <div className="hero">
      <div className="hero-content">
        <h1>Reach New Heights</h1>
        <p>Push Your Limits. Conquer the Peak.</p>
      </div>
    </div>
    <div className="container mt-5">
      <div className="section text-center">
        <h2>Welcome to PeakClimb Gym</h2>
        <p className="accent">
          Your ultimate destination for indoor rock climbing and fitness. Join us to experience the thrill of climbing and improve your skills with our expert instructors. 
          Whether you are a beginner looking to get started or an advanced climber looking to push your limits, we have something for everyone.
        </p>
        <p className="accent">
          Our state-of-the-art facilities and supportive community will help you reach new heights. Come and explore the exciting world of climbing with us!
        </p>
      </div>
      <div className="section">
        <h2 className="text-center">Our Programs</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-center">
              <img src="/images/beginner.jpg" className="card-img-top program-image" alt="Beginner Program" />
              <div className="card-body">
                <h3 className="card-title">Beginner Program</h3>
                <p className="card-text">
                  Get started with our beginner climbing classes and learn the basics in a safe and fun environment. Perfect for those new to climbing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="/images/intermediate.jpg" className="card-img-top program-image" alt="Intermediate Program" />
              <div className="card-body">
                <h3 className="card-title">Intermediate Program</h3>
                <p className="card-text">
                  Take your climbing skills to the next level with our intermediate courses designed to challenge and inspire you. Suitable for climbers with some experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="/images/expert.jpg" className="card-img-top program-image" alt="Advanced Program" />
              <div className="card-body">
                <h3 className="card-title">Advanced Program</h3>
                <p className="card-text">
                  Master advanced climbing techniques and push your limits with our expert-led advanced classes. Ideal for seasoned climbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section text-center">
        <h2>Our Location</h2>
        <p className="accent">
          Visit us at our convenient location. Check out the map below to find us.
        </p>
        <div className="map-container">
          <iframe
            title="PeakClimb Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2644539019125!2d-122.0842496846927!3d37.421999979825085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5bb9b519921%3A0x13b70f2e626fa3f9!2sGoogleplex!5e0!3m2!1sen!2sus!4v1638836588968!5m2!1sen!2sus" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section text-center">
        <h2>Why Choose Us?</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="feature-icon">
              <i className="fas fa-user-shield fa-3x text-warning"></i>
            </div>
            <h4>Safety First</h4>
            <p>
              Our top priority is the safety of our climbers. We provide high-quality gear and ensure all safety protocols are followed.
            </p>
          </div>
          <div className="col-md-4">
            <div className="feature-icon">
              <i className="fas fa-chalkboard-teacher fa-3x text-warning"></i>
            </div>
            <h4>Expert Instructors</h4>
            <p>
              Learn from the best in the industry. Our instructors are experienced and passionate about climbing.
            </p>
          </div>
          <div className="col-md-4">
            <div className="feature-icon">
              <i className="fas fa-mountain fa-3x text-warning"></i>
            </div>
            <h4>State-of-the-Art Facilities</h4>
            <p>
              Enjoy climbing in our state-of-the-art facilities equipped with the latest climbing walls and equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
