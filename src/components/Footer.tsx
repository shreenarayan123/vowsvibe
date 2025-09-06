import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-divider" />
        
        <div className="footer-main">
          <div className="footer-sections">
            <div className="footer-section">
              <div className="section-title">Quick Links</div>
              <div className="section-links">
                Customer Reviews
                <br />
                <br />
                Our Blogs
                <br />
                <br />
                Store Locator
                <br />
                <br />
                Jewellery Care
                <br />
                <br />
                Join Us
              </div>
            </div>
            
            <div className="footer-section">
              <div className="section-title">Details</div>
              <div className="section-links">
                Shipping & Returns
                <br />
                <br />
                Privacy Policy
                <br />
                <br />
                International Shipping
                <br />
                <br />
                FAQ's and Support
                <br />
                <br />
                Terms of Service
              </div>
            </div>
            
            <div className="footer-section">
              <div className="section-title">Details</div>
              <div className="section-links">
                Shipping & Returns
                <br />
                <br />
                Privacy Policy
                <br />
                <br />
                International Shipping
                <br />
                <br />
                FAQ's and Support
                <br />
                <br />
                Terms of Service
              </div>
            </div>
            
            <div className="footer-section contact-section">
              <div className="section-title">Contact Us</div>
              <div className="section-links">
                Elegant JewelsSF-11, Ansal Fortune Arcade, K Block, K-27,
                Sector 18, Noida, Uttar Pradesh 201301
                <br />
                <br />
                For any suggestions, queries or complaints please contact us:
                <br />
                <br />
                Elegantjewel Private Limited
                <br />
                <br />
                contact@elegantjewels.com
                <br />
                <br />
                +1 (555) 123-4567
                <br />
                <br />
              </div>
            </div>
          </div>
          
          <div className="social-links-section">
            <div className="social-links-text">
              Our Social Links:
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <div className="copyright-text">
            © 2024 Elegant Jewels. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
