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
  LoginError,
  ExistingAuthRequest
} from './types';

export const KEY = 'auth';

export const actionTypes = {
  CHECK_FOR_EXISTING_AUTH: `${KEY}/CHECK_FOR_EXISTING_AUTH`,
  LOGIN: createAsyncTypes(`${KEY}/LOGIN`),
  LOGOUT: `${KEY}/LOGOUT`
};

export const actions = {
  checkForExistingAuth: (): ExistingAuthRequest => ({ type: actionTypes.CHECK_FOR_EXISTING_AUTH }),
  loginAsync: (): LoginRequest => ({ type: actionTypes.LOGIN.REQUEST }),
  loginLoading: (isPending: boolean): LoginPending => ({
    type: actionTypes.LOGIN.PENDING,
    payload: { isPending }
  }),
  loginSuccess: (user: firebase.User): LoginSuccess => ({
    type: actionTypes.LOGIN.SUCCESS,
    payload: { user }
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
  user: null
};

const handlers: Handlers<AuthState, AuthActionTypes> = {
  [actionTypes.LOGIN.PENDING]: (state, action) => ({
    ...state,
    isLoading: (action as LoginPending).payload.isPending
  }),
  [actionTypes.LOGIN.SUCCESS]: (state, action) => ({
    ...state,
    user: (action as LoginSuccess).payload.user
  }),
  [actionTypes.LOGIN.ERROR]: (state, action) => ({
    ...state,
    error: (action as LoginError).payload.error
  }),
  [actionTypes.LOGOUT]: () => initialState
};

export const reducer = createReducers<AuthState, AuthActionTypes>(initialState, handlers);
