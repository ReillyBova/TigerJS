// Local imports
import initialState from './config';

// Actions
const SET_TAB_INDEX = 'interface/sidePanel/SET_TAB_INDEX';

// Reducer
export function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_TAB_INDEX:
            return { ...state, activeTabIndex: action.payload };
        default:
            return state;
    }
}

// Action Creators
export function setSidePanelTabIndex(tabIndex) {
    return { type: SET_TAB_INDEX, payload: tabIndex };
}
