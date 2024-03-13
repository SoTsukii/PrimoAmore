import React from 'react';
import './index.css';
import logo from './LogoResto.png';

const Header = () => {
  const handleNavigation = (sectionId) => {
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-content">
          <h1 className="restaurant-name">Primo Amore</h1>
          <p className="slogan">Les Saveurs Incroyables d'Italie</p>
        </div>
      </div>
      <div className="header-right">
        <nav className="navigation">
          <ul>
            <li>
              <a href="#NosPlats" onClick={() => handleNavigation('NosPlats')}>
                Nos Plats
              </a>
            </li>
            <li>
              <a href="#Apropos" onClick={() => handleNavigation('Apropos')}>
                À propos
              </a>
            </li>
            <li>
              <a href="#Reservation" onClick={() => handleNavigation('Reservation')}>
                Réservation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
