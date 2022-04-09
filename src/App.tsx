import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Dashboard from './screens/Dashboard';
import theme from './global/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Navigation } from './navigation';
import { Provider } from 'react-redux';
import { store } from './redux';
import { AppProvider } from './context';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Navigation />
          <StatusBar style="light" />
        </AppProvider>
      </ThemeProvider>
    </Provider>
  );
}
