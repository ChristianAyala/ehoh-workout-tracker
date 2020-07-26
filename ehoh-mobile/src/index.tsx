import React from 'react';
import { Provider } from 'react-redux';
import LoginScreen from 'screens/LoginScreen';
import { store } from 'store';

export default function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}
