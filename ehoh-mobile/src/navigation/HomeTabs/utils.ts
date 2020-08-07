import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';

export const getHeaderTitle = (route: Route<string>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'TodayScreen';
  const routeNameMapping: { [x: string]: string } = {
    TodayScreen: 'Today',
    HistoryScreen: 'History',
    ProfileScreen: 'Profile'
  };

  return routeNameMapping[routeName] ?? 'Today';
};
