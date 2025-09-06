import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <div className="promo-content">
          50% off on all items Only Limited Time Deal Offer ending in 03:34:15
        </div>
      </div>
      
      {/* Main Header */}
      <div className="main-header">
        <div className="header-content">
          <div className="logo">
            LOGO
          </div>
          
          <nav className="navigation">
            <div className="nav-item">
              <span className="nav-text">Collections</span>
              <ChevronDown className="nav-arrow" size={22} />
            </div>
            <div className="nav-item">
              <span className="nav-text">Categories</span>
              <ChevronDown className="nav-arrow" size={22} />
            </div>
            <div className="nav-item">
              <span className="nav-text">Hot Picks</span>
            </div>
            <div className="nav-item">
              <span className="nav-text">Gifts</span>
            </div>
            <div className="nav-item">
              <span className="nav-text">Shop All</span>
            </div>
          </nav>
          
          <div className="auth-buttons">
            <button className="login-button">
              LOGIN
            </button>
            <button className="register-button">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
