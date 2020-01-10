// The initial global state of the app
const initialState = {
    user_interface: {
        sidePanel: {
            activeTabIndex: 0,
        },
        dragState: {
            isActive: false,
            activeDrag: null,
            isClaimed: false,
            claimerID: "",
            claimedDrops: {},
            returningDrops: {},
        },
    },
};

export default initialState;
