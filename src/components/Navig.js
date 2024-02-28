import React, { useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <div className="navbar-links-mobile">
            <button className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>
            {menuOpen && (
                
              <div className="menu-dropdown">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/solutions">Solutions</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/start-a-project" className="cta-button">Start a project</Link>
                <Link to="/schedule-a-call" className="cta-button">Book a Chat</Link>
              </div> 
            )}
          </div>
          <div className="navbar-links-desktop">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/solutions">Solutions</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
          </div>
        </div>
        <div className="navbar-buttons">
                <Link to="/start-a-project" className="cta-button">Start a project</Link>
                <Link to="/schedule-a-call" className="cta-button">Chat with Viola</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
