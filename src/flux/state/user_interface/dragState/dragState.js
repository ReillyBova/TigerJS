// Local imports
import initialState, { propertyName } from './config';

// Actions
const START_DRAG_ACTION = 'interface/dragState/START_DRAG';
const END_DRAG_ACTION = 'interface/dragState/END_DRAG';

const CLAIM_DRAG_ACTION = 'interface/dragState/CLAIM_DRAG';
const UNCLAIM_DRAG_ACTION = 'interface/dragState/UNCLAIM_DRAG';

const RECEIVED_DROP_ACTION = 'interface/dragState/RECEIVE_DROP';
const RETURNED_DROP_ACTION = 'interface/dragState/RETURNED_DROP';

// Statelets
const ACTIVE_DRAG_STATE = (activeDrag) => {
    if (activeDrag.ownerID) {
        return { isActive: true, activeDrag, ...CLAIMED_DRAG_STATE(activeDrag.ownerID) };
    } else {
        return { isActive: true, activeDrag };
    }
};
const INACTIVE_DRAG_STATE = { isActive: false, activeDrag: null };
const DROPPED_DRAG_STATE = (state, { finalX, finalY }) => {
    if (state.isClaimed) {
        const { color, id } = state.activeDrag;
        const claimerID = state.claimerID;
        return {claimedDrops: {
            ...state.claimedDrops,
            [id]: { color, finalX, finalY, claimerID, parentX: "none", parentY: "none" },
        }};
    } else {
        const { color, id, initX, initY, ownerID, parentX, parentY } = state.activeDrag;
        return { returningDrops: {
            ...state.returningDrops,
            [id]: { color, initX, initY, finalX, finalY, ownerID, parentX, parentY },
        }};
    }
};

const CLAIMED_DRAG_STATE = (claimerID) => ({ isClaimed: true, claimerID });
const UNCLAIMED_DRAG_STATE = { isClaimed: false, claimerID: '' };

const RECEIVED_DROP_STATE = (state, ids) => {
    const claimedDrops = { ...state.claimedDrops };
    ids.forEach((id) => { delete claimedDrops[id]; });
    return { claimedDrops };
};
const RETURNED_DROP_STATE = (state, ids) => {
    const returningDrops = { ...state.returningDrops };
    let claimedDrops = state.claimedDrops;
    ids.forEach((id) => {
        if (returningDrops[id].ownerID) {
            const { color, finalX, finalY, parentX, parentY } = returningDrops[id];
            const claimerID = returningDrops[id].ownerID;
            claimedDrops = {...claimedDrops,
                [id]: { color, finalX, finalY, claimerID, parentX, parentY },
            };
        }

        delete returningDrops[id];
    });

    if (claimedDrops !== state.claimedDrops) {
        return {returningDrops, claimedDrops};
    } else {
        return {returningDrops};
    }
};

// Reducer
export function reducer(state = initialState, action = {}) {
    if (action.propertyName !== propertyName) {
        return state;
    }

    switch (action.type) {
        case START_DRAG_ACTION:
            return { ...state, ...ACTIVE_DRAG_STATE(action.payload) };
        case END_DRAG_ACTION:
            return {
                ...state,
                ...UNCLAIMED_DRAG_STATE,
                ...INACTIVE_DRAG_STATE,
                ...DROPPED_DRAG_STATE(state, action.payload),
            };
        case CLAIM_DRAG_ACTION:
            return { ...state, ...CLAIMED_DRAG_STATE(action.payload) };
        case UNCLAIM_DRAG_ACTION:
            return { ...state, ...UNCLAIMED_DRAG_STATE };
        case RECEIVED_DROP_ACTION:
            return { ...state, ...RECEIVED_DROP_STATE(state, action.payload) };
        case RETURNED_DROP_ACTION:
            return { ...state, ...RETURNED_DROP_STATE(state, action.payload) };
        default:
            return state;
    }
}

// Action Creators
function acStartDrag(color, id, initX, initY, mouseX, mouseY, parentX="none", parentY="none", ownerID = '') {
    return {
        type: START_DRAG_ACTION,
        payload: { color, id, initX, initY, mouseX, mouseY, parentX, parentY, ownerID },
        propertyName,
    };
}
function acEndDrag(finalX, finalY) {
    return { type: END_DRAG_ACTION, payload: { finalX, finalY }, propertyName };
}

function acClaimDrag(claimerID) {
    return { type: CLAIM_DRAG_ACTION, payload: claimerID, propertyName };
}
function acUnclaimDrag() {
    return { type: UNCLAIM_DRAG_ACTION, propertyName };
}

function acRecievedDrop(ids) {
    return { type: RECEIVED_DROP_ACTION, payload: ids, propertyName };
}
function acReturnedDrop(ids) {
    return { type: RETURNED_DROP_ACTION, payload: ids, propertyName };
}

export const actionCreators = {
    acStartDrag,
    acEndDrag,
    acClaimDrag,
    acUnclaimDrag,
    acRecievedDrop,
    acReturnedDrop,
};
