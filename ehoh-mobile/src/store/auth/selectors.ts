import { createSelector } from 'reselect';
import { GlobalState } from 'store/types';

import { KEY } from './reducer';

const getAuthState = (state: GlobalState) => state[KEY];

const selectPending = createSelector(getAuthState, (state) => state.isPending);
const selectUser = createSelector(getAuthState, (state) => state.user);

export const selectors = {
  selectPending,
  selectUser
};
