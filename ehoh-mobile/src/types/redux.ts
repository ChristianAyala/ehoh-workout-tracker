export type Handler<State, ActionTypes> = (state: State, action: ActionTypes) => State;
export type Handlers<State, ActionTypes> = { [x: string]: Handler<State, ActionTypes> };

export type GenericAction = { type: string; payload?: object };
export type ActionWithPayload<PayloadStructure> = { type: string; payload: PayloadStructure };
export type EmptyAction = { type: string };
