import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { createLogger } from 'redux-logger';

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
const middlwares=process.env.NODE_ENV==="development"?[createLogger(),thunk]:[thunk]

export const store = createStore(rootReducer,applyMiddleware(...middlwares));

