// Library imports
import { createStore } from 'redux';
// Local imports
import { rootReducer } from './state';

// Use redux to generate the store from the rootReducer
export const store = createStore(rootReducer);
