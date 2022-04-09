import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { LocationObjectCoords } from 'expo-location';

type UseLocationResponse = {
  location: LocationObjectCoords;
};

const useCurrentLocation = (): UseLocationResponse => {
  const [location, setLocation] = useState<LocationObjectCoords>(null);

  const hasPermission = async (alreadyTried: boolean = false) => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== Location.PermissionStatus.GRANTED && !alreadyTried) {
      return hasPermission(true);
    }
    return true;
  };

  useEffect(() => {
    (async () => {
      const permission = hasPermission();

      if (!permission) return;

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);
  return { location };
};

export default useCurrentLocation;
