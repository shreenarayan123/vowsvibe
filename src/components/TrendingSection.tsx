import React from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import './TrendingSection.css';

const TrendingSection: React.FC = () => {
  return (
    <div className="trending-section">
      <h2 className="trending-title">Similar to this</h2>
      
      <div className="trending-container">
        <button className="nav-button nav-button-left">
          <ChevronLeft className="nav-icon" size={33} />
        </button>
        
        <div className="product-card">
          <div className="card-header">
            <div className="offer-tag">BestSeller</div>
            <div className="wishlist-icon">
              <Heart className="heart-icon" size={20} />
            </div>
          </div>
          
          <div className="product-details">
            <div className="product-name">Rose Gold Earrings with alloy</div>
            <div className="price-container">
              <span className="current-price">₹ 1999</span>
              <span className="original-price">₹ 2999</span>
            </div>
            <div className="rating">(4)</div>
          </div>
          
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        
        <div className="product-card">
          <div className="card-header">
            <div className="offer-tag">BestSeller</div>
            <div className="wishlist-icon">
              <Heart className="heart-icon" size={20} />
            </div>
          </div>
          
          <div className="product-details">
            <div className="product-name">Rose Gold Earrings with alloy</div>
            <div className="price-container">
              <span className="current-price">₹ 1999</span>
              <span className="original-price">₹ 2999</span>
            </div>
            <div className="rating">(4)</div>
          </div>
          
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        
        <div className="product-card">
          <div className="card-header">
            <div className="offer-tag">BestSeller</div>
            <div className="wishlist-icon">
              <Heart className="heart-icon" size={20} />
            </div>
          </div>
          
          <div className="product-details">
            <div className="product-name">Rose Gold Earrings with alloy</div>
            <div className="price-container">
              <span className="current-price">₹ 1999</span>
              <span className="original-price">₹ 2999</span>
            </div>
            <div className="rating">(4)</div>
          </div>
          
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        
        <div className="product-card">
          <div className="card-header">
            <div className="offer-tag">BestSeller</div>
            <div className="wishlist-icon">
              <Heart className="heart-icon" size={20} />
            </div>
          </div>
          
          <div className="product-details">
            <div className="product-name">Rose Gold Earrings with alloy</div>
            <div className="price-container">
              <span className="current-price">₹ 1999</span>
              <span className="original-price">₹ 2999</span>
            </div>
            <div className="rating">(4)</div>
          </div>
          
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        
        <button className="nav-button nav-button-right">
          <ChevronRight className="nav-icon" size={33} />
        </button>
      </div>
    </div>
  );
};

export default TrendingSection;
