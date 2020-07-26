import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Handler, GenericAction, Handlers } from './types';

const asyncRequestStates = {
  REQUEST: 'REQUEST',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export type ASYNC_TYPES = typeof asyncRequestStates;

export function createAsyncTypes(type: string): ASYNC_TYPES {
  return Object.keys(asyncRequestStates).reduce<ASYNC_TYPES>(
    (acc, curr) => Object.assign(acc, { [curr]: `${type}_${curr}` }),
    asyncRequestStates
  );
}

export function createReducers<State, ActionTypes extends GenericAction>(
  initialState: State,
  handlers: Handlers<State, ActionTypes>
) {
  return function (state: State = initialState, action: ActionTypes): State {
    const handler: Handler<State, ActionTypes> = handlers[action.type];

    if (handlers[action.type]) {
      return handler(state, action);
    }

    return state;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useActions(actions: any | any[], deps?: any[]) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
}
