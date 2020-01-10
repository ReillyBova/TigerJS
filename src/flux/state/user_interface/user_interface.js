// Project imports
import { combineStatelets } from 'utils';
// Local imports
import * as dragState from './dragState';
import * as sidePanel from './sidePanel';

// Combine child states (reducer, middleware, actions) into a single stage
export const [reducer, middleware, actionCreators] = combineStatelets([
    dragState,
    sidePanel,
]);
