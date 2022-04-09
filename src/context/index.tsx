import React from 'react';
import { LocationProvider } from './AppContext';

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return <LocationProvider>{children}</LocationProvider>;
}

export { AppProvider };
