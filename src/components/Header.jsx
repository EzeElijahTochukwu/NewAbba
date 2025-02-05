// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src="/img/logo.jpg" alt="YesAbbawrites" className="logo" />
      <h1>YesAbba Writes</h1>
      <p>Where creativity meets purpose...</p>
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
