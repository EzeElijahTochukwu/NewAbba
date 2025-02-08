import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-content">
        {/* Left Section - Contact Info */}
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p><a href="tel:08127945747"><i className="fas fa-phone"></i> 08127945747</a></p>
          <p><a href="tel:07031179735"><i className="fas fa-phone"></i> 07031179735</a></p>
          <p><a href="mailto:info@yesabbawrites.online"><i className="fas fa-envelope"></i> info@yesabbawrites.online</a></p>
          <p><a href="https://ng.linkedin.com/company/yesabba-writes?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> YesAbba Writes
          </a></p>
          
          <div className="brand-social">
  <h4 className="brand-name">yesabbawrites</h4>
  <div className="social-icons">
    <a href="https://www.instagram.com/yesabbawrites" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.threads.net/@yesabbawrites" target="_blank" rel="noopener noreferrer">
      <i className="fa-brands fa-threads"></i>
    </a>
    <a href="https://www.pinterest.com/Yesabbawrites/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-pinterest"></i>
    </a>
    <a href="https://www.facebook.com/profile.php?id=61571762233696" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
  </div>
</div>

            
        </div>

        {/* Right Section - Navigation Links */}
        <div className="footer-right">
          <h3>Pages</h3>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#testimonials">Testimonials</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </div>

      {/* Logo Centered Below */}
      <div className="footer-logo-container">
        <img src="/img/logo.jpg" alt="YesAbba Writes Logo" className="footer-logo" />
        <div className="copyright">
          <p>&copy; 2025 YesAbba Writes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
