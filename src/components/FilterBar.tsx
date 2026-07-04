import React from 'react';
import { Search, RotateCcw, Building, Home, Building2 } from 'lucide-react';

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
      {/* Category Quick Pills */}
      <div className="category-pills">
        <button
          onClick={() => onTypeChange('All')}
          className={`pill-btn ${selectedType === 'All' ? 'active' : ''}`}
        >
          <Building size={15} />
          <span>All Properties</span>
        </button>

        <button
          onClick={() => onTypeChange('Villa')}
          className={`pill-btn ${selectedType === 'Villa' ? 'active' : ''}`}
        >
          <Home size={15} />
          <span>Villas</span>
        </button>

        <button
          onClick={() => onTypeChange('Penthouse')}
          className={`pill-btn ${selectedType === 'Penthouse' ? 'active' : ''}`}
        >
          <Building2 size={15} />
          <span>Penthouses</span>
        </button>

        <button
          onClick={() => onTypeChange('Apartment')}
          className={`pill-btn ${selectedType === 'Apartment' ? 'active' : ''}`}
        >
          <Building size={15} />
          <span>Apartments</span>
        </button>
      </div>

      <div className="filter-grid">
        {/* Search Input */}
        <div className="filter-group">
          <label htmlFor="search-input">Search Location / Keyword</label>
          <div className="input-with-icon">
            <Search size={16} className="input-icon" />
            <input
              id="search-input"
              type="text"
              placeholder="Search Jubilee Hills, Gachibowli, Kokapet..."
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
            <option value="All">All Types</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>

        {/* Max Price Dropdown */}
        <div className="filter-group">
          <label htmlFor="price-select">Price Limit (INR)</label>
          <select
            id="price-select"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="filter-select"
          >
            <option value={0}>Any Price</option>
            <option value={15000000}>Up to ₹ 1.5 Cr</option>
            <option value={30000000}>Up to ₹ 3.0 Cr</option>
            <option value={50000000}>Up to ₹ 5.0 Cr</option>
          </select>
        </div>

        {/* Reset Button */}
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
