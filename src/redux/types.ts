import { FactoryForecastDaysData } from '../factory/factoryForecastData';

export interface InitialState {
  loading: boolean;
  error: boolean;
  forecast: FactoryForecastDaysData;
}

export type GetForecastDataPayload = {
  lat: number;
  lon: number;
};

export type GetForecastDataSuccessPayload = FactoryForecastDaysData;
