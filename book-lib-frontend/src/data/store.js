import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
    watchBookLibrary
} from '../sagas';
import rootReducer from '../reducers';

// we need an initialState otherwise , store will freak out
const initialState = {};

const sagaMiddleware = createSagaMiddleware();

// redux sagas is a middleware that we apply to the store
export const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchBookLibrary);

export default store;
