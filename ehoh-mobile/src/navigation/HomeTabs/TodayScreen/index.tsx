import { Screen } from 'components/Screen';
import React, { useEffect } from 'react';
import { Text } from 'react-native-elements';
import { actions as dailyWorkoutActions } from 'store/daily-workout';
import { useActions } from 'store/utils';

const TodayScreen: React.FC = () => {
  const [loadDailyWorkouts] = useActions([dailyWorkoutActions.loadDailyWorkout]);

  useEffect(() => {
    loadDailyWorkouts();
  }, []);

  return (
    <Screen>
      <Text>Welcome!</Text>
    </Screen>
  );
};

export default TodayScreen;
