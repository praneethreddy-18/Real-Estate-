import React from 'react';
import type { Property } from '../data/properties';
import { X, MapPin, Bed, Bath, Square, CheckCircle2, Phone, Mail } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose
}) => {
  if (!property) return null;

  // Resolve dynamic asset image URL
  const imageSrc = new URL(`../assets/${property.image}`, import.meta.url).href;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Photo Banner */}
        <div className="modal-media">
          <img src={imageSrc} alt={property.title} className="modal-img" />
          <span className="modal-type-badge">{property.type}</span>
        </div>

        {/* Modal Body Content */}
        <div className="modal-content">
          {/* Header Info & Price */}
          <div className="modal-header">
            <div>
              <span className="modal-location-tag">
                <MapPin size={16} />
                <span>{property.location}</span>
              </span>
              <h2 className="modal-title">{property.title}</h2>
              <p className="modal-address">{property.address}</p>
            </div>
            
            <div className="modal-price-box">
              <span className="modal-price">{property.formattedPrice}</span>
              <span className="modal-price-sqft">
                ₹{Math.round(property.price / property.sqft).toLocaleString()} / sqft
              </span>
            </div>
          </div>

          {/* Quick Specs (Beds, Baths, Sqft) */}
          <div className="modal-specs-bar">
            <div className="modal-spec-item">
              <Bed size={18} />
              <span>{property.beds} Bedrooms</span>
            </div>
            <div className="modal-spec-item">
              <Bath size={18} />
              <span>{property.baths} Bathrooms</span>
            </div>
            <div className="modal-spec-item">
              <Square size={16} />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>

          {/* Property Overview / Description */}
          <div className="modal-section">
            <h3>Property Description</h3>
            <p className="modal-description">{property.description}</p>
          </div>

          {/* Key Amenities */}
          <div className="modal-section">
            <h3>Key Amenities & Features</h3>
            <div className="amenities-grid">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="amenity-chip">
                  <CheckCircle2 size={16} className="amenity-icon" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seller / Agent Contact Section */}
          <div className="modal-agent-box">
            <div className="agent-info">
              <h4>Hyderabad Prime Realty</h4>
              <p>Verified Property Partner</p>
            </div>

            <div className="agent-contact-actions">
              <a href="tel:+919876543210" className="contact-btn phone-btn">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:contact@hyderabadrealty.in" className="contact-btn email-btn">
                <Mail size={16} />
                <span>Enquire Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
