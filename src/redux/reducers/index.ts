import {
  GetForecastDataPayload,
  GetForecastDataSuccessPayload,
  InitialState,
} from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  loading: false,
  error: false,
  forecast: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getForecastData: (
      state,
      { payload }: PayloadAction<GetForecastDataPayload>
    ) => {
      state.loading = true;
    },
    getForecastDataSuccess: (
      state,
      { payload }: PayloadAction<GetForecastDataSuccessPayload>
    ) => {
      state.forecast = payload;
      state.loading = false;
    },
    getForecastDataFailed: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export default weatherSlice.reducer;
