import React from 'react';
import { Building2, Award, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        {/* Top Tagline Badge */}
        <div className="hero-badge">
          <Award size={15} />
          <span>Hyderabad's #1 Luxury Real Estate Platform</span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-title">
          Discover Extraordinary Homes in <span className="text-gradient">Hyderabad</span>
        </h1>
        
        <p className="hero-description">
          Explore premier villas, sky penthouses, and gated residences across 
          Jubilee Hills, Gachibowli, Kokapet, and Banjara Hills.
        </p>

        {/* Trust & Market Metrics Bar */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <div className="stat-value">500+</div>
            <div className="stat-label">
              <Building2 size={14} />
              <span>Verified Listings</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-value">₹ 1,000Cr+</div>
            <div className="stat-label">
              <ShieldCheck size={14} />
              <span>Property Value</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-value">6 Hubs</div>
            <div className="stat-label">
              <MapPin size={14} />
              <span>Prime Hyderabad Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
