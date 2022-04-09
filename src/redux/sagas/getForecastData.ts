import { PayloadAction } from '@reduxjs/toolkit';
import { LocationObjectCoords } from 'expo-location';
import { put } from 'redux-saga/effects';
import { factoryForecastDaysData } from '../../factory/factoryForecastData';
import { WheatherHttpRequest } from '../../http';
import { weatherSlice } from '../reducers';
import { GetForecastDataPayload } from '../types';

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
