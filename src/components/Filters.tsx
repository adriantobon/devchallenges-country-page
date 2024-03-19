export const Filters = () => {
  return (
    <div className="filters-container">
      {/* Sort By Filter */}
      <div className="filters-sort-by-container">
        <p className="filters-sort-by-label text-xs text-bold-600">Sort by</p>
        <div className="filters-sort-by-select">
          <p>Population</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6L8 10L4 6" stroke="#6C727F" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      {/* Region Filter */}
      <div className="filters-region-container">
        <p className="filters-region-label text-xs text-bold-600">Region</p>
        <div className="filters-region-badges-container">
          <div className="filters-region-badge active-badge">Americas</div>
          <div className="filters-region-badge">Antarctic</div>
          <div className="filters-region-badge active-badge">Africa</div>
          <div className="filters-region-badge active-badge">Asia</div>
          <div className="filters-region-badge active-badge">Europe</div>
          <div className="filters-region-badge">Oceania</div>
        </div>
      </div>
      {/* Status Filter */}
      <div className="filters-status-container">
        <p className="filters-status-label text-xs text-bold-600">Status</p>
        <div className="filters-status-checks-container">
          <div className="filters-status-check-container">
            <div className="filters-status-check"></div>
            <p className="filters-status-check-label">Member of the United Nation</p>
          </div>
          <div className="filters-status-check-container">
            <div className="filters-status-check active-check">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="#D2D5DA" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="filters-status-check-label">Independent</p>
          </div>
        </div>
      </div>
    </div>
  );
};
