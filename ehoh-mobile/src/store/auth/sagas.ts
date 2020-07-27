import * as Google from 'expo-google-app-auth';
import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'services/firebase';

import { actions, actionTypes } from './reducer';

const onSuccessfulLogin = (user: Google.LogInResult) => {};

export function* loginWithGoogle() {
  yield put(actions.loginLoading(true));

  // const authProvider = new firebase.auth.GoogleAuthProvider();

  try {
    const result: Google.LogInResult = yield Google.logInAsync({
      iosClientId: '66608434815-617fknoia86venclf1g4jt99hkg03l07.apps.googleusercontent.com'
    });
    console.log(result);
  } catch (error) {
    yield put(actions.loginError(error));
  } finally {
    yield put(actions.loginLoading(false));
  }
}

export const sagas = [takeLatest(actionTypes.LOGIN.REQUEST, loginWithGoogle)];
