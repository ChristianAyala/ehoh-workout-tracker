import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import React from 'react';
import colors from 'theme/colors';

import HistoryScreen from './HistoryScreen';
import ProfileScreen from './ProfileScreen';
import TodayScreen from './TodayScreen';

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabBarOptions = {
  activeBackgroundColor: colors.screenBackground,
  activeTintColor: colors.white,
  inactiveBackgroundColor: colors.screenBackground,
  inactiveTintColor: colors.gray,
  showLabel: false
};

const tabBarIconSize = 18;

const HomeTabs = () => (
  <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen
      name="TodayScreen"
      component={TodayScreen}
      options={{
        tabBarIcon: (props) => <FontAwesome5 name="dumbbell" {...props} size={tabBarIconSize} />
      }}
    />
    <Tab.Screen
      name="HistoryScreen"
      component={HistoryScreen}
      options={{
        tabBarIcon: (props) => <FontAwesome5 name="calendar-alt" {...props} size={tabBarIconSize} />
      }}
    />
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: (props) => <FontAwesome5 name="user-alt" {...props} size={tabBarIconSize} />
      }}
    />
  </Tab.Navigator>
);
export default HomeTabs;
