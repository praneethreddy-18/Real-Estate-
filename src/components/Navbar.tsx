import React from 'react';
import { Home, Heart } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  viewMode: 'all' | 'saved';
  onViewModeChange: (mode: 'all' | 'saved') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  viewMode,
  onViewModeChange
}) => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <div className="nav-logo">
          <div className="logo-icon">
            <Home size={20} />
          </div>
          <span className="logo-text">RealEstate</span>
        </div>

        {/* View Toggle Buttons (All vs Saved) */}
        <div className="nav-actions">
          <button
            onClick={() => onViewModeChange('all')}
            className={`nav-btn ${viewMode === 'all' ? 'active' : ''}`}
          >
            All Listings
          </button>

          <button
            onClick={() => onViewModeChange('saved')}
            className={`nav-btn saved-btn ${viewMode === 'saved' ? 'active' : ''}`}
          >
            <Heart size={18} className="heart-icon-badge" />
            <span>Saved Favorites</span>
            <span className="saved-badge">{savedCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
