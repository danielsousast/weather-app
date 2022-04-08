import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Dashboard from './screens/Dashboard';
import theme from './global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
