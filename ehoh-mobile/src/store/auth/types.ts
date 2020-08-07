import firebase from 'services/firebase';
import { Nullable } from 'types/global';
import { ActionWithPayload, EmptyAction } from 'types/redux';

export interface AuthState {
  isPending: boolean;
  error: string;
  user: Nullable<firebase.User>;
}

export type ExistingAuthRequest = EmptyAction;
export type LoginRequest = EmptyAction;
export type LoginPending = ActionWithPayload<{ isPending: boolean }>;
export type LoginError = ActionWithPayload<{ error: string }>;
export type LoginSuccess = ActionWithPayload<{ user: firebase.User }>;

export type LogoutRequest = EmptyAction;

export type AuthActionTypes = LoginRequest | LogoutRequest | LoginPending | LoginSuccess | LoginError;
