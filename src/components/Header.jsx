import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="/img/logo.jpg" alt="YesAbbawrites" className="logo" />
      <h1>YesAbba Writes</h1>
      <p>Where creativity meets purpose...</p>
      <nav>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#services">Our Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="/blog">Blog</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
