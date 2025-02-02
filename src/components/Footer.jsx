import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p><a href="tel:08127945747"><i className="fas fa-phone"></i> 08127945747</a></p>
          <p><a href="tel:07031179735"><i className="fas fa-phone"></i> 07031179735</a></p>
          <p><a href="mailto:info@yesabbawrites.online"><i className="fas fa-envelope"></i> info@yesabbawrites.online</a></p>
          <p><a href="https://ng.linkedin.com/company/yesabba-writes?trk=public_post_feed-actor-name"><i className="fab fa-linkedin"></i> YesAbba Writes</a></p>
          <p><a href="https://twitter.com/YesAbbawrites" target="_blank"><i className="fab fa-twitter"></i> @YesAbbawrites</a></p>
        </div>
        <div className="footer-right">
          <img src="/img/logo.jpg" alt="YesAbba Writes Logo" className="footer-logo" />
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#testimonials">Testimonials</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 YesAbba Writes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
