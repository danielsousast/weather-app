import { createSelector } from 'reselect';

import { InitialState } from './types';

export type AppState = {
  weather: InitialState;
};

const appState = (state: AppState) => state?.weather;

export const getSelectedContacts = createSelector(
  appState,
  (appState) => appState?.forecast
);
