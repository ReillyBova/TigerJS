// Library imports
import { useMemo } from 'react';
import { bindActionCreators, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';

/*
 * Merge an array of modules each of the form { propertyName, reducer, ...actions}
 * into a single set of (combined) reducers and actionCreators.
 */
export const combineReducersAndActionCreators = (statelets) => {
    // Merge the reducers and actionCreators into one object and one list, respectively
    const [allReducers, allActionCreators] = statelets.reduce(
        ([prevReducers, prevActionCreators], statelet) => {
            // Extract properties from the statelet
            const {
                propertyName,
                reducer,
                actionCreators,
                ...actions
            } = statelet;

            // Merge the reducer, giving it the key defined by ${propertyName}.
            const nextReducers = { ...prevReducers, [propertyName]: reducer };

            // Merge the actions via a simple spread
            const nextActionCreators = {
                ...prevActionCreators,
                ...actionCreators,
                ...actions,
            };

            return [nextReducers, nextActionCreators];
        },
        [{}, {}]
    );

    // Combine the reducers via redux
    const reducer = combineReducers(allReducers);

    // Return the combined reducer and the list of actions
    return [reducer, allActionCreators];
};

/*
 * A react hook that returns action creators bound to the dispatch
 */
export function useActions(actions, deps) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map((a) => bindActionCreators(a, dispatch));
            }
            return bindActionCreators(actions, dispatch);
        },
        // eslint-disable-next-line
        deps ? [dispatch, ...deps] : [dispatch]
    );
}
