import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import './ProductDetailInfo.css';

const ProductDetailInfo: React.FC = () => {
  return (
    <div className="product-detail-info">
      <div className="product-header">
        <div className="product-title-section">
          <h1 className="main-title">Gold-Plated Pearls Necklace</h1>
          <p className="subtitle">Made with 925 Silver</p>
        </div>

        <div className="rating-price-section">
          <div className="rating-container">
            <div className="rating-badge">
              <span className="rating-number">4.1</span>
              <Star className="star-icon" size={15} fill="white" />
            </div>
            <span className="review-count">(23)</span>
          </div>

          <div className="price-container">
            <span className="current-price">₹ 1,600</span>
            <span className="original-price">₹ 2,000</span>
            <span className="discount-text">(20% off)</span>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="features-row">
          <div className="feature-item">
            <span className="feature-text">Easy 30 Day Return</span>
          </div>
          <div className="feature-item">
            <ShoppingBag className="feature-icon" size={50} />
            <span className="feature-text">925 Silver Plating</span>
          </div>
        </div>
        <div className="features-row">
          <div className="feature-item">
            <div className="warranty-badge">
              <span className="warranty-number">6</span>
            </div>
            <span className="feature-text">6- Month Warranty</span>
          </div>
          <div className="feature-item">
            <span className="feature-text">Premium Gold</span>
          </div>
        </div>
      </div>

      <div className="action-buttons-section">
        <button className="add-to-cart-btn">ADD TO CART</button>
        <button className="buy-now-btn">BUY NOW</button>
      </div>

      <div className="delivery-section">
        <h3 className="section-heading">Estimated Delivery Time</h3>
        <div className="pincode-container">
          <span className="pincode-placeholder">Enter Pincode</span>
          <span className="check-link">Check</span>
        </div>
      </div>

      <div className="offers-section">
        <div className="offers-header">
          <div className="offers-info">
            <span className="offers-title">Offers</span>
            <span className="offers-available">2 available</span>
          </div>
          <span className="check-link">Check</span>
        </div>
        <p className="coupon-text">Coupon can be applied at checkout</p>
      </div>

      <div className="divider-line"></div>

      <div className="description-section">
        <h3 className="section-heading">Product Decsription</h3>
        <div className="description-list">
          <div className="description-item">
            <div className="bullet-point"></div>
            <span className="description-text">
              Material: <span className="description-value">925 Sterling Silver</span>
            </span>
          </div>
          <div className="description-item">
            <div className="bullet-point"></div>
            <span className="description-text">
              Plating: <span className="description-value">18K Gold</span>
            </span>
          </div>
          <div className="description-item">
            <div className="bullet-point"></div>
            <span className="description-text">
              Weight: <span className="description-value">10grams</span>
            </span>
          </div>
          <div className="description-item">
            <div className="bullet-point"></div>
            <span className="description-text">
              Stone Type: <span className="description-value">Premium Jerkin</span>
            </span>
          </div>
        </div>
      </div>

      <div className="shipping-section">
        <h3 className="section-heading">Shipping</h3>
        <div className="shipping-info">
          <span className="shipping-text">
            Get it by <span className="shipping-date">25 Sept</span>
          </span>
          <div className="shipping-arrow"></div>
        </div>
      </div>

      <div className="divider-line"></div>

      <div className="customer-ratings-section">
        <h2 className="ratings-heading">Customer Ratings</h2>
        <div className="divider-line"></div>

        <div className="review-item">
          <div className="reviewer-details">
            <h4 className="reviewer-name">Anu</h4>
            <p className="review-date">15/08/24</p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="rating-star" size={13} fill="#FFD700" />
              ))}
            </div>
          </div>
          <p className="review-comment">
            Such a gorgeous necklace. Got many compliments as well. Absolutely loved it
          </p>
          <div className="review-images">
            <div className="review-image"></div>
            <div className="review-image"></div>
          </div>
        </div>

        <div className="divider-line"></div>

        <div className="review-item">
          <div className="reviewer-details">
            <h4 className="reviewer-name">Anu</h4>
            <p className="review-date">15/08/24</p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="rating-star" size={13} fill="#FFD700" />
              ))}
            </div>
          </div>
          <p className="review-comment">
            Looks beautiful 😻❤️❤️❤️ Go for it girls 😍💝💐 the quality is good ..
          </p>
          <div className="review-images">
            <div className="review-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
