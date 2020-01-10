// Project imports
import { combineStatelets } from 'utils';
// Local imports
import * as user_interface from './user_interface';

// Combine child states into the root state containing the rootReducer and all middleware/actionCreators
export const [rootReducer, middleware, actionCreators] = combineStatelets([
    user_interface,
]);
