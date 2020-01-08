// Project imports
import { combineReducersAndActionCreators } from 'utils';
// Local imports
import * as user_interface from './user_interface';

// Combine child states into the rootReducer and an object containing all actionCreators
export const [rootReducer, actionCreators] = combineReducersAndActionCreators([
    user_interface,
]);
