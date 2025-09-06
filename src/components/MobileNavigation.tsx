import React from 'react';
import './MobileNavigation.css';

interface NavigationItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  iconType?: 'add' | 'nav';
}

const MobileNavigation: React.FC = () => {
  const navigationItems: NavigationItem[] = [
    {
      id: 'add-account',
      label: 'Add Account',
      iconType: 'add',
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 15H22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 22.5V7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'gold-jewellery',
      label: 'Gold jewellery',
      iconType: 'nav',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8333 14.5833L4.16664 2.91667" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.8333 6.025V14.5833H7.27498" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.0833 18.3333H2.91664" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'silver-jewellery',
      label: 'Silver Jewellery',
      iconType: 'nav',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8324 14.5855L4.16573 2.91881" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.8324 6.02592V14.5843H7.27406" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.0816 18.3343H2.91493" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'trending-collection',
      label: 'Trending Collection',
      iconType: 'nav',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8324 14.5855L4.16573 2.91881" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.8324 6.02592V14.5843H7.27406" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.0816 18.3343H2.91493" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'gifts',
      label: 'Gifts',
      iconType: 'nav',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8324 14.5855L4.16573 2.91879" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.8324 6.02591V14.5842H7.27406" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.0816 18.3343H2.91493" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'shop-by-occasion',
      label: 'Shop by Occasion',
      iconType: 'nav',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8324 14.5855L4.16573 2.91879" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.8324 6.02591V14.5842H7.27406" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.0816 18.3343H2.91493" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'login-signup',
      label: 'Login / SignUp',
      iconType: 'nav',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99998 9.99999C12.3012 9.99999 14.1666 8.13451 14.1666 5.83332C14.1666 3.53214 12.3012 1.66666 9.99998 1.66666C7.69879 1.66666 5.83331 3.53214 5.83331 5.83332C5.83331 8.13451 7.69879 9.99999 9.99998 9.99999Z" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.8418 18.3333C2.8418 15.1083 6.05013 12.5 10.0001 12.5C10.8001 12.5 11.5751 12.6083 12.3001 12.8083" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.332 14.9987C18.332 15.6237 18.157 16.2154 17.8487 16.7154C17.6737 17.0154 17.4487 17.282 17.1903 17.4987C16.607 18.0237 15.8403 18.332 14.9987 18.332C13.782 18.332 12.7237 17.682 12.1487 16.7154C11.8403 16.2154 11.6653 15.6237 11.6653 14.9987C11.6653 13.9487 12.1487 13.007 12.9153 12.3987C13.4903 11.9404 14.2153 11.6654 14.9987 11.6654C16.8403 11.6654 18.332 13.157 18.332 14.9987Z" stroke="#2D2D2D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.6998 14.9983L14.5248 15.8233L16.2998 14.1816" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="mobile-navigation-container">
      <div className="navigation-sidebar" />
      <nav className="navigation-menu">
        {navigationItems.map((item) => (
          <div key={item.id} className="navigation-item">
            <div className="navigation-item-content">
              <div className="navigation-icon">
                {item.icon}
              </div>
              {item.iconType !== 'add' && (
                <span className="navigation-label">{item.label}</span>
              )}
              {item.iconType === 'add' && (
                <span className="navigation-label">{item.label}</span>
              )}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavigation;
