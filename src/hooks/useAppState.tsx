import { useContext } from 'react';
import { Context } from '../components/AppContextProvider';

export const useAppState = () => {

  const { appState, setAppState } = useContext(Context);

  return { appState, setAppState };

};
