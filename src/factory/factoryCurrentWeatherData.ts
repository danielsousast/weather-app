import { CurentWeatherData } from '../http/types';

export type FactoryCurrentWeatherData = {
  currentTemperature: string;
  minTemperature: string;
  maxTemperature: string;
  humidity: string;
  description: string;
  address: string;
};

export function factoryCurrentWeatherData(
  data: CurentWeatherData
): FactoryCurrentWeatherData {
  return {
    currentTemperature: `${data?.main?.temp?.toFixed(0)}°C`,
    minTemperature: `${data?.main?.temp_min?.toFixed(0)}°C`,
    maxTemperature: `${data?.main?.temp_max?.toFixed(0)}°C`,
    humidity: `${data?.main?.humidity}%`,
    description: data?.weather ? data?.weather[0].description : '',
    address: `${data?.name}, ${data.sys.country}`,
  };
}
