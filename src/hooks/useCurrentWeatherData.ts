import { useEffect, useState } from 'react';
import {
  FactoryCurrentWeatherData,
  factoryCurrentWeatherData,
} from '../factory/factoryCurrentWeatherData';
import { WheatherHttpRequest } from '../http';
import useLocation from './useCurrentLocation';

type HookReturn = {
  curentWeatherData: FactoryCurrentWeatherData;
  loading: boolean;
};

const useCurrentWeatherData = (): HookReturn => {
  const [loading, setLoading] = useState(false);
  const [curentWeatherData, setCurentWeatherData] =
    useState<FactoryCurrentWeatherData>();
  const { location } = useLocation();

  async function getCurrentWeatherData(lat, lon) {
    if (!lat || !lon) return {};
    const httpRequest = new WheatherHttpRequest();
    const response = await httpRequest.getCurrentWeatherData(
      location?.latitude,
      location?.longitude
    );
    const data = factoryCurrentWeatherData(response);
    setCurentWeatherData(data);
  }

  useEffect(() => {
    getCurrentWeatherData(location?.latitude, location?.longitude);
  }, [location]);

  return { loading, curentWeatherData };
};

export default useCurrentWeatherData;
