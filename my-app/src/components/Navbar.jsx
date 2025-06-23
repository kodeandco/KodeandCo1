import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="logo">Kode & Co.</div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              onClick={(e) => handleSmoothScroll(e, 'portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;