import { ICountry } from './country.interface';

interface IAppStateFilters {
  searchBy: string | null;
  sortBy: string | null;
  region: string | null;
  status: string | null;
}

export interface IAppState {
  countries: ICountry[];
  isLoading: boolean;
  filters: IAppStateFilters
}

export interface IContext {
  appState: IAppState,
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}
