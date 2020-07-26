import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'services/firebase';

import { actions, actionTypes } from './reducer';

export function* loginWithGoogle() {
  yield put(actions.loginLoading(true));

  const authProvider = new firebase.auth.GoogleAuthProvider();

  try {
    yield firebase.auth().signInWithRedirect(authProvider);
    const result: firebase.auth.UserCredential = yield firebase.auth().getRedirectResult();
    if (result.user && result.credential) {
      yield put(actions.loginSuccess(result.user, result.credential));
    }
  } catch (error) {
    yield put(actions.loginError(error));
  } finally {
    yield put(actions.loginLoading(false));
  }
}

export const sagas = [takeLatest(actionTypes.LOGIN.REQUEST, loginWithGoogle)];
