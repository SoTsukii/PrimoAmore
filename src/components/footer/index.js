import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Nous Contacter</h4>
          <p>Email: contact@monsite.com</p>
          <p>Téléphone: +33 123 456 789</p>
        </div>
        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">&copy; 2023 Primo Amore. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;