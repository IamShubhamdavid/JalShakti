import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>India's Groundwater Management System</h1>
          <p>Real-time monitoring, analysis, and management of groundwater resources across India with data from 5,260 DWLR stations</p>
          <Link to="/data" className="btn">Access Dashboard</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;