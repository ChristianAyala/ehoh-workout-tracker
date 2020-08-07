import { Nullable } from 'types/global';
import { EmptyAction, ActionWithPayload } from 'types/redux';

export interface Activity {
  name: string;
  quantity: number;
}

export interface DailyWorkout {
  user_id: Nullable<string>;
  date: Date;
  activities: Activity[];
}

export interface DailyWorkoutState {
  recommendedWorkout: Nullable<DailyWorkout>;
  customWorkout: Nullable<DailyWorkout>;
  isPending: boolean;
  error: string;
}

export type LoadDailyWorkoutRequest = EmptyAction;
export type LoadDailyWorkoutPending = ActionWithPayload<{ isPending: boolean }>;
export type LoadDailyWorkoutError = ActionWithPayload<{ error: string }>;
export type LoadDailyWorkoutSuccess = ActionWithPayload<{
  recommendedWorkout: Nullable<DailyWorkout>;
  customWorkout: Nullable<DailyWorkout>;
}>;

export type DailyWorkoutActions =
  | LoadDailyWorkoutRequest
  | LoadDailyWorkoutPending
  | LoadDailyWorkoutError
  | LoadDailyWorkoutSuccess;
