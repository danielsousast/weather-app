import { useEffect, useState } from 'react';
import { useLocation } from '../context/AppContext';
import {
  FactoryCurrentWeatherData,
  factoryCurrentWeatherData,
} from '../factory/factoryCurrentWeatherData';
import { WheatherHttpRequest } from '../http';

type HookReturn = {
  curentWeatherData: FactoryCurrentWeatherData;
  loading: boolean;
};

const useCurrentWeatherData = (): HookReturn => {
  const [loading, setLoading] = useState(true);
  const [curentWeatherData, setCurentWeatherData] =
    useState<FactoryCurrentWeatherData>();
  const { location } = useLocation();

  async function getCurrentWeatherData(lat, lon) {
    if (!lat || !lon) {
      setLoading(false);
      return;
    }
    const httpRequest = new WheatherHttpRequest();
    const response = await httpRequest.getCurrentWeatherData(
      location?.latitude,
      location?.longitude
    );
    const data = factoryCurrentWeatherData(response);
    setLoading(false);
    setCurentWeatherData(data);
  }

  useEffect(() => {
    getCurrentWeatherData(location?.latitude, location?.longitude);
  }, [location]);

  return { loading, curentWeatherData };
};

export default useCurrentWeatherData;
