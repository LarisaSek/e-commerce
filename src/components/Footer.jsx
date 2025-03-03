import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Meny</h4>
          <div className="footer-links">
            <Link to="/about">Om oss</Link>
            <Link to="/">Produkter</Link>
            <Link to="/cart">Kundvagn</Link>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Email: info@butik.se</p>
          <p>Tel: 08-123 45 67</p>
        </div>

        <div className="footer-section">
          <h4>Följ oss</h4>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;