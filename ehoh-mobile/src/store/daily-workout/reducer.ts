import { createAsyncTypes, createReducers } from 'store/utils';
import { Nullable } from 'types/global';
import { Handlers } from 'types/redux';

import {
  DailyWorkoutState,
  DailyWorkoutActions,
  LoadDailyWorkoutRequest,
  LoadDailyWorkoutSuccess,
  LoadDailyWorkoutError,
  LoadDailyWorkoutPending,
  DailyWorkout
} from './types';

export const KEY = 'daily-workout';

export const actionTypes = {
  LOAD_DAILY_WORKOUT: createAsyncTypes(`${KEY}/LOAD_DAILY_WORKOUT`)
};

export const actions = {
  loadDailyWorkout: (): LoadDailyWorkoutRequest => ({ type: actionTypes.LOAD_DAILY_WORKOUT.REQUEST }),
  dailyWorkoutLoading: (isPending: boolean): LoadDailyWorkoutPending => ({
    type: actionTypes.LOAD_DAILY_WORKOUT.PENDING,
    payload: { isPending }
  }),
  dailyWorkoutSuccess: (
    recommendedWorkout: Nullable<DailyWorkout>,
    customWorkout: Nullable<DailyWorkout>
  ): LoadDailyWorkoutSuccess => ({
    type: actionTypes.LOAD_DAILY_WORKOUT.SUCCESS,
    payload: { recommendedWorkout, customWorkout }
  }),
  dailyWorkoutError: (error: string): LoadDailyWorkoutError => ({
    type: actionTypes.LOAD_DAILY_WORKOUT.ERROR,
    payload: { error }
  })
};

export const initialState: DailyWorkoutState = {
  isPending: false,
  error: '',
  recommendedWorkout: null,
  customWorkout: null
};

const handlers: Handlers<DailyWorkoutState, DailyWorkoutActions> = {
  [actionTypes.LOAD_DAILY_WORKOUT.PENDING]: (state, action) => ({
    ...state,
    isPending: (action as LoadDailyWorkoutPending).payload.isPending
  }),
  [actionTypes.LOAD_DAILY_WORKOUT.SUCCESS]: (state, action) => ({
    ...state,
    recommendedWorkout: (action as LoadDailyWorkoutSuccess).payload.recommendedWorkout,
    customWorkout: (action as LoadDailyWorkoutSuccess).payload.customWorkout
  }),
  [actionTypes.LOAD_DAILY_WORKOUT.ERROR]: (state, action) => ({
    ...state,
    error: (action as LoadDailyWorkoutError).payload.error
  })
};

export const reducer = createReducers<DailyWorkoutState, DailyWorkoutActions>(initialState, handlers);
