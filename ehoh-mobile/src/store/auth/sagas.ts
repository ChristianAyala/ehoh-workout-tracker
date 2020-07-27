import * as Google from 'expo-google-app-auth';
import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'services/firebase';
import { Nullable } from 'types/global';

import { actions, actionTypes } from './reducer';

const loadFirebaseUser = async () => {
  return await new Promise<Nullable<firebase.User>>((resolve) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser: Nullable<firebase.User>) => {
      unsubscribe();
      resolve(firebaseUser);
    });
  });
};

const onSuccessfulLogin = async (user: Google.LogInResult) => {
  if (user.type !== 'success') {
    throw new Error('Please try logging in again');
  }

  const isUserAlreadyAuthenticted = (firebaseUser: Nullable<firebase.User>): boolean => {
    if (firebaseUser) {
      for (const provider of firebaseUser?.providerData) {
        if (provider && provider.uid === user.user.id) {
          return true;
        }
      }
    }
    return false;
  };

  const firebaseUser = await loadFirebaseUser();

  if (!isUserAlreadyAuthenticted(firebaseUser)) {
    const credential = firebase.auth.GoogleAuthProvider.credential(user.idToken, user.accessToken);
    const result = await firebase.auth().signInWithCredential(credential);
    return result.user;
  }

  return firebaseUser;
};

export function* loginWithGoogle() {
  yield put(actions.loginLoading(true));

  try {
    const result: Google.LogInResult = yield Google.logInAsync({
      iosClientId: '66608434815-617fknoia86venclf1g4jt99hkg03l07.apps.googleusercontent.com'
    });
    const firebaseUser: firebase.User = yield onSuccessfulLogin(result);
    yield put(actions.loginSuccess(firebaseUser));
  } catch (error) {
    yield put(actions.loginError(error));
  } finally {
    yield put(actions.loginLoading(false));
  }
}

export function* checkForExistingAuth() {
  try {
    const firebaseUser = yield loadFirebaseUser();
    if (firebaseUser) {
      yield put(actions.loginSuccess(firebaseUser));
    }
  } catch (error) {
    console.log('Disregarding error', error);
  }
}

export const sagas = [
  takeLatest(actionTypes.LOGIN.REQUEST, loginWithGoogle),
  takeLatest(actionTypes.CHECK_FOR_EXISTING_AUTH, checkForExistingAuth)
];
