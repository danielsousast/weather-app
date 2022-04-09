import { ForecastWeatherData } from '../http/types';

export type Day = {
  date: string;
  formatedDate: string;
  minTemperature: string;
  maxTemperature: string;
  description: string;
};

export type FactoryForecastDaysData = Day[];

export function factoryForecastDaysData(
  forecast: ForecastWeatherData
): FactoryForecastDaysData {
  const days = forecast?.daily?.map((item) => ({
    date: item.dt,
    formatedDate: `${formatDate(item.dt)}`,
    minTemperature: `${item?.temp?.min?.toFixed()}°C`,
    maxTemperature: `${item?.temp?.max?.toFixed()}°C`,
    description: item.weather ? item.weather[0].description : '',
  }));

  return days;
}

function formatDate(date: any) {
  return new Date(date * 1000).toLocaleDateString('pt-BR');
}
