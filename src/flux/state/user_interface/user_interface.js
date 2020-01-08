// Project imports
import { combineReducersAndActionCreators } from 'utils';
// Local imports
import * as sidePanel from './sidePanel';

// Combine child states into a reducer and its associated actionCreators
export const [reducer, actionCreators] = combineReducersAndActionCreators([
    sidePanel,
]);
