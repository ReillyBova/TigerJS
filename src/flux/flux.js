// Library imports
import { createStore, applyMiddleware } from 'redux';
// Local imports
import { rootReducer, middleware } from './state';

// Use redux to generate the store from the rootReducer
export const store = createStore(rootReducer, applyMiddleware(...middleware));
