import { CurentWeatherData } from '../http/types';

export type FactoryCurrentWeatherData = {
  currentTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
};

export function factoryCurrentWeatherData(
  data: CurentWeatherData
): FactoryCurrentWeatherData {
  return {
    currentTemperature: data?.main?.temp,
    minTemperature: data?.main.temp_min,
    maxTemperature: data?.main?.temp_min,
    humidity: data?.main?.humidity,
  };
}
