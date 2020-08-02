import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { actions as authActions, selectors as authSelectors } from 'store/auth';
import { useActions } from 'store/utils';

import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  const [checkForExistingAuth] = useActions([authActions.checkForExistingAuth]);
  const user = useSelector(authSelectors.selectUser);
  console.log(user);

  useEffect(() => {
    checkForExistingAuth();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
