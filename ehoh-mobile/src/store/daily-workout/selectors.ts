import { createSelector } from 'reselect';
import { GlobalState } from 'store/types';

import { KEY } from './reducer';

const getDailyWorkoutState = (state: GlobalState) => state[KEY];

const selectPending = createSelector(getDailyWorkoutState, (state) => state.isPending);
const selectRecommendedWorkout = createSelector(getDailyWorkoutState, (state) => state.recommendedWorkout);
const selectCustomWorkout = createSelector(getDailyWorkoutState, (state) => state.customWorkout);

export const selectors = {
  selectPending,
  selectRecommendedWorkout,
  selectCustomWorkout
};
