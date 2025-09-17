import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-tint"></i>
            <Link to="/" className="logo-text">Jal Shakti Groundwater</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
              </li>
              <li>
                <Link to="/data" className={location.pathname === '/data' ? 'active' : ''}>Data</Link>
              </li>
              <li>
                <Link to="/map" className={location.pathname === '/map' ? 'active' : ''}>Map</Link>
              </li>
              <li>
                <Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>Resources</Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;