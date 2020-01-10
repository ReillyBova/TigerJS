// Local imports
import parentInitialState from '../config.js';

// The name/key of this property
export const propertyName = 'dragState';

// Extract the local initial state, as defined by propertyName
const initialState = parentInitialState[propertyName] || {};
export default initialState;
