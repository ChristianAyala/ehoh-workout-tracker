import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'services/firebase';
import collections from 'services/firebase/collections';

import { actions, actionTypes } from './reducer';

export function* loadDailyWorkouts() {
  yield put(actions.dailyWorkoutLoading(true));
  try {
    const dbHandle = firebase.firestore();
    const results: firebase.firestore.QuerySnapshot = yield dbHandle.collection(collections.WORKOUT_OF_THE_DAY).get();
    const data = results.docs.map((snapshot) => snapshot.data());
    console.log(data);
  } catch (error) {
    yield put(actions.dailyWorkoutError(error));
  } finally {
    yield put(actions.dailyWorkoutLoading(false));
  }
}

export const sagas = [takeLatest(actionTypes.LOAD_DAILY_WORKOUT.REQUEST, loadDailyWorkouts)];
