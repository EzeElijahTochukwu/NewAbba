import React, { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src="/img/logo.jpg" alt="YesAbbawrites" className="logo" />
      <h1>YesAbba Writes</h1>
      <p>Where creativity meets purpose...</p>
      <nav>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="/blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger-menu" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="/" onClick={handleMenuToggle}>Home</a>
            <a href="#services" onClick={handleMenuToggle}>Services</a>
            <a href="#about" onClick={handleMenuToggle}>About Us</a>
            <a href="#testimonials" onClick={handleMenuToggle}>Testimonials</a>
            <a href="/blog" onClick={handleMenuToggle}>Blog</a>
            <a href="#contact" onClick={handleMenuToggle}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
