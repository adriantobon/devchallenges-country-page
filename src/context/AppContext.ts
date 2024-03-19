import { IContext } from '@/models/appState.interface';
import { createContext } from 'react';

export const AppContext = createContext<IContext>({
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
