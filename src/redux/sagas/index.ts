import { all, takeLatest } from 'redux-saga/effects';
import { weatherSlice } from '../reducers';
import { getWeatherHistoricSaga } from './getWeatherHistoric';

export default function* root(): any {
  yield all([
    yield takeLatest(
      weatherSlice.actions.getWeatherHistoric,
      getWeatherHistoricSaga
    ),
  ]);
}
