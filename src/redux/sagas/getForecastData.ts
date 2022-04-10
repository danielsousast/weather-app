import { put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { weatherSlice } from '../reducers';
import { WheatherHttpRequest } from '../../http';
import { GetForecastDataPayload } from '../types';
import { factoryForecastDaysData } from '../../factory/factoryForecastData';

export function* getForecastData({
  payload: { lat, lon },
}: PayloadAction<GetForecastDataPayload>): unknown {
  try {
    const httpRequest = new WheatherHttpRequest();
    const response = yield httpRequest.getForecastData(lat, lon);

    const factory = factoryForecastDaysData(response);

    yield put(weatherSlice.actions.getForecastDataSuccess(factory));
  } catch (error: any) {
    yield put(weatherSlice.actions.getForecastDataFailed());
  }
}
