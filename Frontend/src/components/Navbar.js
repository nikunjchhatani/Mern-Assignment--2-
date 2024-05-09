import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
        <li><Link to="/register" className="nav-link">Register</Link></li>
        <li><Link to="/add-content" className="nav-link">Add Content</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
