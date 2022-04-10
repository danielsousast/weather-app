import React from 'react';
import { Provider } from './AppContext';

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return <Provider>{children}</Provider>;
}

export { AppProvider };
