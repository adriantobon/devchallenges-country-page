export const SearchBy = () => {
  return (
    <div className="search-by-container">
      <p className="countries-found-label text-bold-600">Found 234 countries</p>
      <div className="search-by-input-text">
        <svg className="search-by-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="#6C727F" strokeWidth="2"/>
          <path d="M20 20L17 17" stroke="#6C727F" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <p className="text-sm">Search by Name, Region, Subregion</p>
      </div>
    </div>
  );
};
