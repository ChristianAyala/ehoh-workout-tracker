import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { KEY as AUTH, reducer as authReducer, sagas as authSagas } from './auth';
import {
  KEY as DAILY_WORKOUTS_KEY,
  reducer as dailyWorkoutsReducer,
  sagas as dailyWorkoutSagas
} from './daily-workout';

const componseEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const sagas = function* combineSagas() {
  yield all([...authSagas, ...dailyWorkoutSagas]);
};

const rootReducer = combineReducers({
  [AUTH]: authReducer,
  [DAILY_WORKOUTS_KEY]: dailyWorkoutsReducer
});

export const store = createStore(rootReducer, componseEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);
