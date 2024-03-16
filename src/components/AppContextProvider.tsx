import { createContext, ReactNode, useState } from 'react';
import { IAppState, IContext } from '../models/appState.interface';

export const Context = createContext<IContext>({
  appState: {
    countries: [],
    filters: {
      searchBy: null,
      sortBy: null,
      region: null,
      status: null
    },
    isLoading: false
  },
  setAppState: () => null
});

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

  return (
    <Context.Provider value={{ appState, setAppState }}>
      { children }
    </Context.Provider>
  );
};
