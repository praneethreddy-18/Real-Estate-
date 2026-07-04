import React from 'react';
import { Home, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="nav-logo">
            <div className="logo-icon">
              <Home size={18} />
            </div>
            <span className="logo-text">RealEstate</span>
          </div>
          <p className="footer-tagline">
            Hyderabad's trusted luxury real estate portal connecting buyers with premier villas, penthouses, and residences.
          </p>
        </div>

        {/* Hyderabad Locations Links */}
        <div className="footer-col">
          <h4>Prime Locations</h4>
          <ul className="footer-links">
            <li><span className="location-dot"></span>Jubilee Hills</li>
            <li><span className="location-dot"></span>Banjara Hills</li>
            <li><span className="location-dot"></span>Gachibowli</li>
            <li><span className="location-dot"></span>Kokapet Golden Mile</li>
            <li><span className="location-dot"></span>HITEC City</li>
            <li><span className="location-dot"></span>Kondapur</li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="footer-contact-item">
            <MapPin size={16} />
            <span>Financial District, Gachibowli, Hyderabad</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} />
            <span>contact@hyderabadrealty.in</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} RealEstate Hyderabad. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};
