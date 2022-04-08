import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherHistoric: (state) => {
      state.value += 1;
    },
    getWeatherHistoricSuccess: (state) => {
      state.value -= 1;
    },
    getWeatherHistoricFailed: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export default weatherSlice.reducer;
