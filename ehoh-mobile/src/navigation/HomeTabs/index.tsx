import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TodayScreen from './TodayScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Today" component={TodayScreen} />
  </Tab.Navigator>
);

export default HomeTabs;
