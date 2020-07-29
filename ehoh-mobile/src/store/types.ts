import { KEY as AUTH, AuthState } from './auth';

export interface GlobalState {
  [AUTH]: AuthState;
}
