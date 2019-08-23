import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

export default createStore(rootReducer, initialState, applyMiddleware(...middleware));