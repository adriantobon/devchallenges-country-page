import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export const useAppState = () => {

  const { appState, setAppState } = useContext(AppContext);

  return { appState, setAppState };

};
