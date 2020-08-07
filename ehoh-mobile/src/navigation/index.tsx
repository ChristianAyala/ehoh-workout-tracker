import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { actions as authActions, selectors as authSelectors } from 'store/auth';
import { useActions } from 'store/utils';
import colors from 'theme/colors';

import HomeTabs from './HomeTabs';
import { getHeaderTitle } from './HomeTabs/utils';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  const [checkForExistingAuth] = useActions([authActions.checkForExistingAuth]);
  const user = useSelector(authSelectors.selectUser);

  useEffect(() => {
    checkForExistingAuth();
  }, []);

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="HomeTabs"
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerTintColor: colors.white,
            headerTitleStyle: { fontFamily: 'OpenSans_600SemiBold' },
            headerStyle: { backgroundColor: colors.screenBackground, shadowColor: 'transparent' }
          })}
          component={HomeTabs}
        />
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
