import './App.css';
import { useAppState } from './hooks/useAppState';

// Components
import { HeroBanner } from './components/HeroBanner';
import { SearchBy } from './components/SearchBy';
import { Filters } from './components/Filters';
import { CountriesTable } from './components/CountriesTable';

const App = () => {

  const { appState } = useAppState();

  return (
    <>
      <HeroBanner />
      <main className="main-container">
        <div className="countries-container">
          <SearchBy />
          <div className="filters-countries-container">
            <Filters />
            {
              appState.isLoading
                ? <p>is Loading</p>
                : <CountriesTable countries={appState.countries} />
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
