import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>Contact me on WhatsApp: <a href="https://wa.me/0755794664" target="_blank" rel="noopener noreferrer">0755794664</a></p>
        <p>Email: <a href="mailto:charlefurahi@gmail.com">charlefurahi@gmail.com</a></p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
