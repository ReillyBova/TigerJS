// Library imports
import { useMemo } from 'react';
import { bindActionCreators, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';

/*
 * Merge an array of modules each of the form
 * { propertyName, reducer, middleware, actionCreators}
 * into a single set of (combined-)reducers, middleware, and actionCreators.
 */
export const combineStatelets = (statelets) => {
    // Merge the objects into one object
    const [allReducers, allMiddleware, allActionCreators] = statelets.reduce(
        ([prevReducers, prevMiddleware, prevActionCreators], statelet) => {
            // Extract properties from the statelet
            const { propertyName, reducer, middleware, actionCreators } = statelet;

            // Merge the reducer, giving it the key defined by ${propertyName}.
            const nextReducers = { ...prevReducers, [propertyName]: reducer };

            // Merge the middleware
            const nextMiddleware = [ ...prevMiddleware, ...(middleware? middleware : []) ];

            // Merge the actions via a simple spread
            const nextActionCreators = {
                ...prevActionCreators,
                ...(actionCreators? actionCreators : {}),
            };

            return [nextReducers, nextMiddleware, nextActionCreators];
        },
        [{}, [], {}]
    );

    // Combine the reducers via redux
    const reducer = combineReducers(allReducers);

    // Return the combined reducer, middleware, and actionCreators
    return [reducer, allMiddleware, allActionCreators];
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
