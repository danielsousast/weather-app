import { all, takeLatest } from 'redux-saga/effects';
import { weatherSlice } from '../reducers';
import { getForecastData } from './getForecastData';

export default function* root(): any {
  yield all([
    yield takeLatest(weatherSlice.actions.getForecastData, getForecastData),
  ]);
}
