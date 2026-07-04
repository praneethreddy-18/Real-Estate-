import React from 'react';
import type { Property } from '../data/properties';
import { Heart, Bed, Bath, Square, MapPin, ExternalLink } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  isSaved: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isSaved,
  onToggleFavorite,
  onSelectProperty
}) => {
  // Dynamically load image asset from src/assets folder
  const imageSrc = new URL(`../assets/${property.image}`, import.meta.url).href;

  return (
    <div 
      className="property-card"
      onClick={() => onSelectProperty(property)}
    >
      {/* Property Photo & Favorite Button */}
      <div className="card-media">
        <img src={imageSrc} alt={property.title} className="card-img" />
        <span className="type-badge">{property.type}</span>
        
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent opening modal when clicking favorite heart
            onToggleFavorite(property.id);
          }}
          className={`favorite-btn ${isSaved ? 'is-favorite' : ''}`}
          aria-label={isSaved ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={18} fill={isSaved ? '#ef4444' : 'none'} color={isSaved ? '#ef4444' : '#ffffff'} />
        </button>
      </div>

      {/* Property Details */}
      <div className="card-body">
        <div className="card-price-row">
          <div className="card-price">{property.formattedPrice}</div>
          <span className="view-details-tag">
            <span>Details</span>
            <ExternalLink size={13} />
          </span>
        </div>

        <h3 className="card-title">{property.title}</h3>
        
        <div className="card-location">
          <MapPin size={15} />
          <span>{property.location}</span>
        </div>

        {/* Specs: Beds / Baths / Sqft */}
        <div className="card-specs">
          <div className="spec">
            <Bed size={16} />
            <span>{property.beds} Beds</span>
          </div>
          <div className="spec">
            <Bath size={16} />
            <span>{property.baths} Baths</span>
          </div>
          <div className="spec">
            <Square size={14} />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};
