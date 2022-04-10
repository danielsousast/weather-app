import { LocationObjectCoords } from 'expo-location';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

interface AppContextData {
  location: LocationObjectCoords;
}

interface ProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

function Provider({ children }: ProviderProps) {
  const [location, setLocation] = useState<LocationObjectCoords>(
    {} as LocationObjectCoords
  );

  async function getLocation() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== Location.PermissionStatus.GRANTED) {
        Alert.alert(
          'Permita que o WeatherApp acesse a localizacao do seu dispositivo.'
        );
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
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

export { Provider, useLocation };
