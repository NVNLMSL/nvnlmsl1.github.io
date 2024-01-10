import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky">
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="animation"></div>
    </header>
  );
};

export default Navbar;
