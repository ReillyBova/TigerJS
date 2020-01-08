// widgets.js

// Actions
const CHANGE_COLOR = 'testing/CHANGE_COLOR';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case CHANGE_COLOR:
        return { ...state, color: action.payload };
    default: return state;
  }
}

// Action Creators
export function changeColor(newColor) {
  return { type: CHANGE_COLOR, payload: newColor };
}
