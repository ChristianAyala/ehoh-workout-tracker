import { KEY as AUTH, AuthState } from './auth';
import { KEY as DAILY_WORKOUTS_KEY, DailyWorkoutState } from './daily-workout';

export interface GlobalState {
  [AUTH]: AuthState;
  [DAILY_WORKOUTS_KEY]: DailyWorkoutState;
}
