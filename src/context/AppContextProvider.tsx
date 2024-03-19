import { ReactNode, useEffect, useState } from 'react';
import { IAppState } from '@/models/appState.interface';
import { fetchCountries } from '@/utils/fetchCountries';
import { ICountry } from '@/models/country.interface';
import { AppContext } from './AppContext';

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [appState, setAppState] = useState<IAppState>(
    {
      countries: [],
      filters: {
        searchBy: null,
        sortBy: null,
        region: 'test',
        status: null
      },
      isLoading: true
    }
  );

  useEffect(() => {

    const getCountries = async() => {
      const countries: ICountry[] = await fetchCountries();
      setAppState(state => (
        {
          ...state,
          countries,
          isLoading: false
        }
      ));
    };

    // Adding this timeout in order to see the loader
    setTimeout(() => {
      getCountries();
    }, 2000);

  }, []);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      { children }
    </AppContext.Provider>
  );
};
