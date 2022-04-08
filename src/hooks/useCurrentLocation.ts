import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { LocationObjectCoords } from 'expo-location';

type UseLocationResponse = {
  location: LocationObjectCoords;
};

const useLocation = (): UseLocationResponse => {
  const [location, setLocation] = useState<LocationObjectCoords>(null);
  const [curentWeatherData, setCurentWeatherData] = useState();

  const hasLocation = async (alreadyTried: boolean = false) => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== Location.PermissionStatus.GRANTED && !alreadyTried) {
      return hasLocation(true);
    }

    return true;
  };

  useEffect(() => {
    (async () => {
      const permission = hasLocation();

      if (!permission) return;

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);
  return { location };
};

export default useLocation;
