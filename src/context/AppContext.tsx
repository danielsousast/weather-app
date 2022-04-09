import { LocationObjectCoords } from 'expo-location';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import * as Location from 'expo-location';

interface AppContextData {
  location: LocationObjectCoords;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

function LocationProvider({ children }: AppProviderProps) {
  const [location, setLocation] = useState<LocationObjectCoords>(
    {} as LocationObjectCoords
  );
  const hasPermission = async (alreadyTried: boolean = false) => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== Location.PermissionStatus.GRANTED && !alreadyTried) {
      return hasPermission(true);
    }
    return true;
  };

  async function getLocation() {
    try {
      const permission = hasPermission();

      if (!permission) return;

      const currentLocation = await Location.getCurrentPositionAsync({});
      console.log('currentLocation', currentLocation);
      setLocation(currentLocation.coords);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  React.useEffect(() => {
    async function loadLocation() {
      getLocation();
    }

    loadLocation();
  }, []);

  return (
    <AppContext.Provider value={{ location }}>{children}</AppContext.Provider>
  );
}

function useLocation(): AppContextData {
  const context = useContext(AppContext);

  return context;
}

export { LocationProvider, useLocation };
