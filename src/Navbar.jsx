import './App.css'
import React from "react";
import { Link, NavLink } from "react-router-dom"; 
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <div className="container">
        <img src="/logoweb.jpg" alt="Bad connect" width="50px" height="50px" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="menu_active" to="/about" className="nav-link text-white">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" to="/contact" className="nav-link text-white">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" to="/service" className="nav-link text-white">Service</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
