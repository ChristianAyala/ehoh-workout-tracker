import firebase from 'services/firebase';
import { Handlers } from 'store/types';
import { createAsyncTypes, createReducers } from 'store/utils';

import {
  AuthState,
  LoginPending,
  LoginSuccess,
  AuthActionTypes,
  LoginRequest,
  LogoutRequest,
  LoginError
} from './types';

export const KEY = 'auth';

export const actionTypes = {
  LOGIN: createAsyncTypes(`${KEY}/LOGIN`),
  LOGOUT: `${KEY}/LOGOUT`
};

export const actions = {
  loginAsync: (): LoginRequest => ({ type: actionTypes.LOGIN.REQUEST }),
  loginLoading: (isPending: boolean): LoginPending => ({
    type: actionTypes.LOGIN.PENDING,
    payload: { isPending }
  }),
  loginSuccess: (user: firebase.User, credential: firebase.auth.AuthCredential): LoginSuccess => ({
    type: actionTypes.LOGIN.SUCCESS,
    payload: { user, credential }
  }),
  loginError: (error: string): LoginError => ({
    type: actionTypes.LOGIN.ERROR,
    payload: { error }
  }),
  logout: (): LogoutRequest => ({ type: actionTypes.LOGOUT })
};

export const initialState: AuthState = {
  isPending: false,
  error: '',
  user: null,
  credential: null
};

const handlers: Handlers<AuthState, AuthActionTypes> = {
  [actionTypes.LOGIN.PENDING]: (state, action) => ({
    ...state,
    isLoading: (action as LoginPending).payload.isPending
  }),
  [actionTypes.LOGIN.SUCCESS]: (state, action) => ({
    ...state,
    user: (action as LoginSuccess).payload.user,
    credential: (action as LoginSuccess).payload.credential
  }),
  [actionTypes.LOGIN.ERROR]: (state, action) => ({
    ...state,
    error: (action as LoginError).payload.error
  }),
  [actionTypes.LOGOUT]: () => initialState
};

export const reducer = createReducers<AuthState, AuthActionTypes>(initialState, handlers);
