import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import useResourceLoader from 'hooks/useResourceLoader';
import RootNavigator from 'navigation';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { store } from 'store';

import theme from './theme';

export default function App() {
  const isLoading = useResourceLoader();

  if (isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="light" />
    </Provider>
  );
}
