import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();
const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
