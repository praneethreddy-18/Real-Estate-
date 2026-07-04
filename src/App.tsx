import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { PropertyCard } from './components/PropertyCard';
import { properties } from './data/properties';
import { Building2 } from 'lucide-react';

function App() {
  // Saved Property IDs (persisted in localStorage)
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('real_estate_saved');
    return saved ? JSON.parse(saved) : [];
  });

  // View Mode: 'all' listings or 'saved' favorites
  const [viewMode, setViewMode] = useState<'all' | 'saved'>('all');

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [maxPrice, setMaxPrice] = useState<number>(0);

  // Sync saved favorites to localStorage
  useEffect(() => {
    localStorage.setItem('real_estate_saved', JSON.stringify(savedIds));
  }, [savedIds]);

  // Toggle favorite status for a property
  const handleToggleFavorite = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reset all search filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setMaxPrice(0);
  };

  // Compute filtered properties list based on active view and search filters
  const filteredProperties = properties.filter((property) => {
    // If viewing 'saved' favorites only
    if (viewMode === 'saved' && !savedIds.includes(property.id)) {
      return false;
    }

    // Search query match (Location or Title)
    if (
      searchQuery &&
      !property.location.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !property.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Property Type filter match
    if (selectedType !== 'All' && property.type !== selectedType) {
      return false;
    }

    // Max Price filter match
    if (maxPrice > 0 && property.price > maxPrice) {
      return false;
    }

    return true;
  });

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar
        savedCount={savedIds.length}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <main className="container main-content">
        {/* Page Title */}
        <div className="page-header">
          <h1>
            {viewMode === 'saved' ? 'Saved Favorite Properties' : 'Explore Property Listings'}
          </h1>
          <p>
            {viewMode === 'saved'
              ? `Showing your ${savedIds.length} saved properties`
              : 'Browse luxury villas, penthouses, and modern apartments'}
          </p>
        </div>

        {/* Filter Bar (Only shown in 'all' view mode) */}
        {viewMode === 'all' && (
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            onReset={handleResetFilters}
          />
        )}

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className="properties-grid">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isSaved={savedIds.includes(property.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="empty-state">
            <Building2 size={48} className="empty-icon" />
            <h3>No Properties Found</h3>
            <p>
              {viewMode === 'saved'
                ? "You haven't saved any favorite properties yet. Click the heart icon on any listing to save it!"
                : 'No property matches your current filter criteria. Try resetting your filters.'}
            </p>
            {viewMode === 'all' ? (
              <button onClick={handleResetFilters} className="btn-primary">
                Reset Filters
              </button>
            ) : (
              <button onClick={() => setViewMode('all')} className="btn-primary">
                Browse All Properties
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
