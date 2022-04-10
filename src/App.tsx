import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './navigation';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { store } from './redux';
import theme from './global/theme';
import { AppProvider } from './context';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

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
