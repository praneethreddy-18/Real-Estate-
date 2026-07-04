import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  onReset: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  maxPrice,
  onMaxPriceChange,
  onReset
}) => {
  return (
    <div className="filter-card">
      <div className="filter-grid">
        {/* Search Input */}
        <div className="filter-group">
          <label htmlFor="search-input">Location / Keyword</label>
          <div className="input-with-icon">
            <Search size={16} className="input-icon" />
            <input
              id="search-input"
              type="text"
              placeholder="Search by city or title (e.g. Malibu)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="filter-input"
            />
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="filter-group">
          <label htmlFor="type-select">Property Type</label>
          <select
            id="type-select"
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Property Types</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>

        {/* Max Price Range Dropdown */}
        <div className="filter-group">
          <label htmlFor="price-select">Price Limit</label>
          <select
            id="price-select"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="filter-select"
          >
            <option value={0}>Any Price</option>
            <option value={1500000}>Up to $1.5M</option>
            <option value={3000000}>Up to $3.0M</option>
            <option value={5000000}>Up to $5.0M</option>
          </select>
        </div>

        {/* Reset Filters Button */}
        <div className="filter-group filter-btn-group">
          <label>&nbsp;</label>
          <button onClick={onReset} className="btn-reset">
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};
