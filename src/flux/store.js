import { createStore } from 'redux';
import { combineReducers } from 'redux';
import * as reducers from './actions';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default store;
