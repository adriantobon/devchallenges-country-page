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
      isLoading: false
    }
  );

  useEffect(() => {

    const getCountries = async() => {
      const countries: ICountry[] = await fetchCountries();
      setAppState(state => (
        {
          ...state,
          countries
        }
      ));
    };

    getCountries();
  }, []);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      { children }
    </AppContext.Provider>
  );
};
