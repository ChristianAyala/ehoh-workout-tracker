import firebase from 'services/firebase';
import { ActionWithPayload, EmptyAction } from 'store/types';

export interface AuthState {
  isPending: boolean;
  error: string;
  user: firebase.User | null;
  credential: firebase.auth.AuthCredential | null;
}

export type LoginRequest = EmptyAction;
export type LoginPending = ActionWithPayload<{ isPending: boolean }>;
export type LoginError = ActionWithPayload<{ error: string }>;
export type LoginSuccess = ActionWithPayload<{
  user: firebase.User;
  credential: firebase.auth.AuthCredential;
}>;

export type LogoutRequest = EmptyAction;

export type AuthActionTypes = LoginRequest | LogoutRequest | LoginPending | LoginSuccess | LoginError;
