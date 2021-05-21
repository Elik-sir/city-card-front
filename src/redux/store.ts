import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


export const store = createStore(rootReducer,applyMiddleware(thunk));

