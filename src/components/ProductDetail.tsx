import React from 'react';
import { Heart, ShoppingCart, Star, ChevronRight } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  return (
    <div className="product-detail">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <div className="promo-text">50% off on all items till 23 Jan</div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="logo-section">
          <div className="logo">LOGO</div>
        </div>
        <div className="header-icons">
          <Heart className="icon" size={24} />
          <ShoppingCart className="icon" size={24} />
        </div>
      </div>

      {/* Product Details Title */}
      <div className="section-title">
        <h1>Product Details</h1>
      </div>

      {/* Product Image Section */}
      <div className="product-image-section">
        <div className="product-image"></div>
        <div className="image-indicators">
          <div className="indicator"></div>
          <div className="indicator active"></div>
          <div className="indicator"></div>
          <div className="indicator"></div>
          <div className="indicator"></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-title">Gold-Plated Pearls Necklace</div>
        <div className="product-subtitle">Made with 925 Silver</div>
        
        <div className="rating-section">
          <div className="rating-badge">
            <span className="rating-value">4.1</span>
            <Star className="rating-star" size={12} fill="white" />
          </div>
          <span className="rating-count">(23)</span>
        </div>

        <div className="price-section">
          <span className="current-price">₹ 1,600</span>
          <span className="original-price">₹ 2,000</span>
          <span className="discount">(20% off)</span>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn-add-cart">ADD TO CART</button>
          <button className="btn-buy-now">BUY NOW</button>
        </div>

        {/* Product Features */}
        <div className="product-features">
          <div className="feature-item">
            <span className="feature-text">Easy 30 Day Return</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <span className="feature-text">925 Silver Plating</span>
          </div>
          <div className="feature-item">
            <div className="warranty-icon">
              <span>6</span>
            </div>
            <span className="feature-text">6- Month Warranty</span>
          </div>
          <div className="feature-item">
            <span className="feature-text">Premium Gold</span>
          </div>
        </div>

        {/* Offers Section */}
        <div className="offers-section">
          <div className="offers-header">
            <span className="offers-title">Offers</span>
            <span className="offers-count">2 available</span>
          </div>
          <span className="offers-check">Check</span>
        </div>

        <div className="coupon-info">
          Coupon can be applied at checkout
        </div>

        {/* Delivery Section */}
        <div className="delivery-section">
          <h3 className="delivery-title">Estimated Delivery Time</h3>
          <div className="pincode-input">
            <span className="pincode-placeholder">Enter Pincode</span>
            <span className="pincode-check">Check</span>
          </div>
        </div>

        <div className="divider"></div>

        {/* Product Description */}
        <div className="product-description">
          <h3 className="description-title">Product Decsription</h3>
          <div className="description-list">
            <div className="description-item">
              <ChevronRight className="bullet-icon" size={13} />
              <span>Material: <span className="description-detail">925 Sterling Silver</span></span>
            </div>
            <div className="description-item">
              <ChevronRight className="bullet-icon" size={13} />
              <span>Plating: <span className="description-detail">18K Gold</span></span>
            </div>
            <div className="description-item">
              <ChevronRight className="bullet-icon" size={13} />
              <span>Weight: <span className="description-detail">10grams</span></span>
            </div>
            <div className="description-item">
              <ChevronRight className="bullet-icon" size={13} />
              <span>Stone Type: <span className="description-detail">Premium Jerkin</span></span>
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="shipping-section">
          <h3 className="shipping-title">Shipping</h3>
          <div className="shipping-info">
            <span>Get it by <span className="shipping-date">25 Sept</span></span>
            <ChevronRight className="shipping-icon" size={22} />
          </div>
        </div>
      </div>

      {/* Customer Ratings */}
      <div className="customer-ratings">
        <div className="ratings-divider"></div>
        <h2 className="ratings-title">Customer Ratings</h2>
        <div className="ratings-divider"></div>

        {/* Review 1 */}
        <div className="review">
          <div className="reviewer-info">
            <h4 className="reviewer-name">Anu</h4>
            <div className="review-date">15/08/24</div>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="review-star" size={11} fill="#FFD700" />
              ))}
            </div>
          </div>
          <p className="review-text">
            Such a gorgeous necklace. Got many compliments as well. Absolutely loved it
          </p>
          <div className="review-images">
            <div className="review-image"></div>
            <div className="review-image"></div>
          </div>
        </div>

        <div className="ratings-divider"></div>

        {/* Review 2 */}
        <div className="review">
          <div className="reviewer-info">
            <h4 className="reviewer-name">Anu</h4>
            <div className="review-date">15/08/24</div>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="review-star" size={11} fill="#FFD700" />
              ))}
            </div>
          </div>
          <p className="review-text">
            Looks beautiful 😻❤️❤️❤️ Go for it girls 😍💝💐 the quality is good ..
          </p>
          <div className="review-images">
            <div className="review-image"></div>
          </div>
        </div>
      </div>

      {/* You Might Also Like */}
      <div className="recommended-products">
        <h2 className="recommended-title">You Might also like</h2>
        <div className="product-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="product-card">
              <div className="card-header">
                {i % 2 === 0 && (
                  <div className="bestseller-tag">BestSeller</div>
                )}
                <div className="wishlist-icon">
                  <Heart size={15} />
                </div>
              </div>
              <div className="card-content">
                <div className="card-product-name">Rose Gold Earrings with alloy</div>
                <div className="card-price">
                  <span className="card-current-price">₹ 1999</span>
                  <span className="card-original-price">₹ 2999</span>
                </div>
                <div className="card-rating">(4)</div>
              </div>
              <button className="card-button">Move to Bag</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <p>Customer Reviews</p>
              <p>Our Blogs</p>
              <p>Store Locator</p>
              <p>Jewellery Care</p>
              <p>Join Us</p>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Details</h3>
            <div className="footer-links">
              <p>Shipping & Returns</p>
              <p>Privacy Policy</p>
              <p>International Shipping</p>
              <p>FAQ's and Support</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
        
        <div className="contact-section">
          <h3 className="footer-title">Contact Us</h3>
          <div className="contact-info">
            <p>Elegant JewelsSF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida, Uttar Pradesh 201301</p>
            <p>For any suggestions, queries or complaints please contact us:</p>
            <p>Elegantjewel Private Limited</p>
            <p>contact@elegantjewels.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="social-links">
            <p>Our Social Links:</p>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="copyright">
        <p>© 2024 Elegant Jewels. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
